const repository = require('./car.repository');

function insert(body) {
  return repository.insert(body);
}

function update(licensePlate, body) {
  return repository.update(licensePlate, body);
}

function remove(licensePlate) {
  return repository.remove({'licensePlate': licensePlate});
}

function listBylicensePlate(licensePlate) {
  return repository.find({'licensePlate': licensePlate });
}

function listCar(conditions) {
  return repository.listCar(conditions);
}

module.exports = { listBylicensePlate, insert, update, remove, listCar };
