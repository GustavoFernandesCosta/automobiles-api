const express = require('express');
const router = express.Router();

const useController = require('./use.controller');

router.post('/', useController.create);
router.patch('/:useId', useController.finalizeUse);
router.get('/', useController.listUses);

module.exports = router;
