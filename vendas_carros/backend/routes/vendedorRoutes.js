import { Router } from 'express';
import * as c from '../controllers/vendedorController.js';

const router = Router();

router.get('/', c.listar);
router.post('/', c.cadastrar);
router.delete('/:id', c.excluir);

export default router;