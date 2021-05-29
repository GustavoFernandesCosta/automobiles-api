const driverService = require('./driver.service');

const DUPLICATED_ERROR_CODE = 11000;

async function create(req, res) {
    const body = req.body;
    try{
        const driver = await driverService.insert(body);
        res.status(201).json({ 'code': 200, 'message': 'Driver has been created!', 'driver': driver});
    } catch(err){
        if(err.code === DUPLICATED_ERROR_CODE){
            return res.status(400).json({'code': 400, 'message': 'DriverId has already registered!'});
        }
        res.status(400).json({'code': 400, 'message': 'Error to save in database', 'details': err.stack});
    }
}

async function update(req, res) {
    const driverId = req.params.driverId;
    const body = req.body;
    try{
        const driver = await driverService.update(driverId, body);
        res.status(200).json({ 'code': 200, 'message': 'Driver has been updated!', 'driver': driver});
    } catch(err){
        res.status(400).json({'code': 400, 'message': 'Error to update!', 'details': err.stack});
    }
}


async function remove(req, res) {
    const driverId = req.params.driverId;
    try{
        const driver = await driverService.remove(driverId);
        res.status(200).json({ 'code': 200, 'message': 'Driver has been deleted!', 'driver': driver });
    } catch(err){
        res.status(400).json({ 'code': 400, 'message': 'Error to remove!'});
    }
}

async function listByDriverId(req, res) {
    const driverId = req.params.driverId;
    try{
        const driver = await driverService.listByDriverId(driverId);
        res.status(200).json({ 'code': 200, 'driver': driver });
    } catch(err){
        res.status(400).json({ 'code': 400, 'message': 'Error to list driver!', 'details': err.stack });
    }
}

async function listDriver(req, res) {
    const conditions = req.query;
    try{
        const driver = await driverService.listDriver(conditions);
        res.status(200).json({ 'code': 200, 'driver': driver });
    } catch(err){
        res.status(400).json({ 'code': 400, 'message': 'Error to list driver!', 'details': err.stack });
    }
}

module.exports = { create, update, remove, listByDriverId, listDriver };
