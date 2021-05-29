const express = require('express');
const router = express.Router();

const carController = require('./car.controller');

router.post('/', carController.create);
router.put('/:licensePlate', carController.update);
router.delete('/:licensePlate', carController.remove);
router.get('/:licensePlate', carController.listBylicensePlate);
router.get('/', carController.listCar);

module.exports = router;
