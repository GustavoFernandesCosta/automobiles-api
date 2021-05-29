const repository = require('./driver.repository');

function insert(body){
    return repository.insert(body);
}

function update(driverId, body) {
    return repository.update(driverId, body);
}

function remove(driverId) {
    return repository.remove({'driverId': driverId});
}
  
function listByDriverId(driverId) {
    return repository.findDriver({'driverId': driverId });
}

function listDriver(conditions) {
    return repository.listDriver(conditions);
}

module.exports = { insert, update, remove, listByDriverId, listDriver };
