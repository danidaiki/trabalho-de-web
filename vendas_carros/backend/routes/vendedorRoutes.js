const router = require('express').Router();
const c = require('../controllers/vendedorController');

router.get('/', c.listar);
router.post('/', c.cadastrar);
router.delete('/:id', c.excluir);

module.exports = router;