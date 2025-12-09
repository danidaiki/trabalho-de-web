import express from 'express';
import veiculoRoutes from './routes/veiculoRoutes.js';

const router = express.Router();

router.use('/veiculos', veiculoRoutes);

export default router;
