const express = require('express');
const router = express.Router();

const driverController = require('./driver.controller');

router.post('/', driverController.create);
router.put('/:driverId', driverController.update);
router.delete('/:driverId', driverController.remove);
router.get('/:driverId', driverController.listByDriverId);
router.get('/', driverController.listDriver);

module.exports = router;
