import express from 'express';
import { listar, cadastrar, excluir } from '../controllers/vendedorController.js';

const router = express.Router();

router.get('/', listar);
router.post('/', cadastrar);
router.delete('/:id', excluir);

export default router;
