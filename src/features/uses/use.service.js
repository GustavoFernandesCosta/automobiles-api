const repository = require('./use.repository');

function insert(body) {
    return repository.insert(body)
}

function finalizeUse(useId, body) {
    return repository.finalizeUse(useId, body);
}

function listUses(conditions) {
    return repository.listUses(conditions);
}

module.exports = { insert, finalizeUse, listUses };
