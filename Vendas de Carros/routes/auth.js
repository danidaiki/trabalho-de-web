const express = require('express');
const router = express.Router();
const VeiculoModel = require('../models/veiculoModel');
router.get('/', async (req,res)=>{ const list = await VeiculoModel.allWithVendedor(); res.render('veiculos/index',{ veiculos: list, title:'Veículos' }); });
router.get('/new', async (req,res)=>{ res.render('veiculos/form',{ veiculo:{}, vendedores: [], title:'Novo Veículo' }); });
// Terminar rotas de veiculos (create, edit, delete)
module.exports = router;
