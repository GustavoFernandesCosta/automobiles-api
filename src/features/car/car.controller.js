const carService = require('./car.service');

const DUPLICATED_ERROR_CODE = 11000;

async function create(req, res) {
    const body = req.body;
    try {
        const car = await carService.insert(body);
        res.status(200).json({ 'code': 200, 'message': 'Car has been created!', 'car': car});
    } catch(err) {
        if(err.code === DUPLICATED_ERROR_CODE){
            return res.status(400).json({'code': 400, 'message': 'License plate has already registered!'});
        }
        res.status(400).json({'code': 400, 'message': 'Error to save in database', 'details': err.stack});
    }
}

async function update(req, res) {
    const licensePlate = req.params.licensePlate;
    const body = req.body;
    try{
        const car = await carService.update(licensePlate, body);
        res.status(200).json({ 'code': 200, 'message': 'Car has been updated!', 'car': car});
    } catch(err){
        res.status(400).json({ 'code': 400, 'message': 'Error to update!', 'details': err.stack});
    }
}

async function remove(req, res) {
    const licensePlate = req.params.licensePlate;
    try{
        const car = await carService.remove(licensePlate);
        res.status(200).json({ 'code': 200, 'message': 'Car has been deleted!', 'car': car });
    } catch(err){
        res.status(400).json({ 'code': 400, 'message': 'Error to remove!', 'details': err.stack});
    }
}

async function listBylicensePlate(req, res) {
    const licensePlate = req.params.licensePlate;
    try{
        const car = await carService.listBylicensePlate(licensePlate);
        res.status(200).json({ 'code': 200, 'car': car });
    } catch(err){
        res.status(400).json({ 'code': 400, 'message': 'Error to list car!', 'details': err.stack });
    }
}

async function listCar(req, res) {
    const conditions = req.query;
    try{
        const car = await carService.listCar(conditions);
        res.status(200).json({ 'code': 200, 'car': car });
    } catch(err){
        res.status(400).json({ 'code': 400, 'message': 'Error to list car!', 'details': err.stack });
    }
}

module.exports = { create, listBylicensePlate, update, remove, listCar };
