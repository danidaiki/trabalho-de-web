import express from "express";
import veiculoRoutes from "./veiculoRoutes.js";
import vendedorRoutes from "./vendedorRoutes.js";
import authRoutes from "./authRoutes.js";

const router = express.Router();

router.use("/veiculos", veiculoRoutes);
router.use("/vendedor", vendedorRoutes);
router.use("/auth", authRoutes);

export default router;
