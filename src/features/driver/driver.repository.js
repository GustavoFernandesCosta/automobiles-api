const driverModel = require('./driver.model');

function insert(body) {
    return driverModel.create(body);
}

function update(driverId, body) {
    return driverModel.findOneAndUpdate({'driverId': driverId}, body);
}

function remove(driverId) {
    return driverModel.deleteOne(driverId);
}

function findDriver(driverId) {
    return driverModel.find(driverId).exec();
}

function listDriver(conditions) {
    return driverModel.find(conditions).exec();
}

module.exports = { insert, update, remove, findDriver, listDriver };
