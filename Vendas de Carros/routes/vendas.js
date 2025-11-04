const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/vendaController');

router.get('/', ctrl.index);
router.post('/', ctrl.create);
router.post('/:id/delete', ctrl.remove);

module.exports = router;
