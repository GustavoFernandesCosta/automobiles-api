const carModel = require('./car.model');

function insert(body) {
  return carModel.create(body);
}

function update(licensePlate, body) {
  return carModel.findOneAndUpdate({'licensePlate': licensePlate}, body);
}

function remove(licensePlate) {
  return carModel.deleteOne(licensePlate);
}

function find(licensePlate) {
  return carModel.find(licensePlate).exec();
}

function listCar(conditions) {
  return carModel.find(conditions).exec();
}

module.exports = { find, insert, update, remove, listCar };
