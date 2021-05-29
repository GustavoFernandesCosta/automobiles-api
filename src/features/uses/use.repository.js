const useModel = require('./use.model');

function insert(body) {
    return useModel.create(body);
}

function finalizeUse(useId, body) {
    return useModel.findOneAndUpdate({'useId': useId}, body);
}

function listUses(params) {
    return useModel.find(params);
}

module.exports = { insert, finalizeUse, listUses };
