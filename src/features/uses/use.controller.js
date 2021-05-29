const useService = require('./use.service');

const DUPLICATED_ERROR_USEID = 11000;

async function create(req, res) {
    const driver = req.body.driver.driverId;
    const car = req.body.car.licensePlate;
    const initialDate = new Date(req.body.initialDate);
    const body = req.body;

    const uses = await useService.listUses();

    for(use of uses){
        if(use.driver.driverId === driver || use.car.licensePlate === car){
            if(use.endDate === null){
                return res.status(400).json({'code': 400, 'message': 'Car or driver in use!'});
            }
            if(use.endDate > initialDate){
                return res.status(400).json({'code': 400, 'message': 'Car or driver in use!'});
            }
        }
    }
    try {
        const use = await useService.insert(body);
        res.status(201).json({ 'code': 200, 'message': 'Use has been created!', 'use': use});
    } catch(err){
        if(err.code === DUPLICATED_ERROR_USEID){
            return res.status(400).json({'code': 400, 'message': 'Use Id already registered!'});
        }
        res.status(400).json({'code': 400, 'message': 'Error to save in database', 'details': err.stack});
    }
}

async function finalizeUse(req, res) {
    const useId = req.params.useId;
    const body = req.body;
    try {
        const use = await useService.finalizeUse(useId, body);
        res.status(201).json({ 'code': 200, 'message': 'Use has been finalized!', 'use': use});
    } catch(err) {
        res.status(400).json({'code': 400, 'message': 'Error to finalize use!', 'details': err.stack});
    }
}

async function listUses(req, res) {
    const conditions = req.query;
    try {
        const uses = await useService.listUses(conditions);
        res.status(201).json({ 'code': 200, 'uses': uses});
    } catch(err) {
        res.status(400).json({'code': 400, 'message': 'Error to list uses', 'details': err.stack});
    }
}

module.exports = { create, finalizeUse, listUses };
