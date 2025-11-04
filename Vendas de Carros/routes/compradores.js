const express = require('express');
const router = express.Router();
const CompradorModel = require('../models/compradorModel');
router.get('/', async (req,res)=>{ const list = await CompradorModel.all(); res.render('compradores/index', { compradores: list, title:'Compradores' }); });
router.get('/new', (req,res)=> res.render('compradores/form', { comprador:{}, title:'Novo Comprador' }));
router.post('/', async (req,res)=>{ await CompradorModel.create(req.body); res.redirect('/compradores'); });
// Terminar rotas de compradores (edit, delete)
module.exports = router;
