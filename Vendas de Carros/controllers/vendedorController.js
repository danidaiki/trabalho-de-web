const Vendedor = require('../models/vendedorModel');
module.exports = {
  index: async (req,res)=>{ const vendedores = await Vendedor.all(); res.render('vendedores/index',{vendedores, title:'Vendedores'}); },
  newForm: (req,res)=> res.render('vendedores/form', {vendedor:{}, title:'Novo Vendedor'}),
  create: async (req,res)=>{ await Vendedor.create(req.body); res.redirect('/vendedores'); },
  editForm: async (req,res)=>{ const vendedor = await Vendedor.findById(req.params.id); res.render('vendedores/edit',{vendedor, title:'Editar Vendedor'}); },
  update: async (req,res)=>{ await Vendedor.update(req.params.id, req.body); res.redirect('/vendedores'); },
  remove: async (req,res)=>{ await Vendedor.remove(req.params.id); res.redirect('/vendedores'); }
};
