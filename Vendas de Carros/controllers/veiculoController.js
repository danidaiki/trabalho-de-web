const Veiculo = require('../models/veiculoModel');
const Vendedor = require('../models/vendedorModel');

module.exports = {
  index: async (req, res) => {
    const veiculos = await Veiculo.allWithVendedor();
    const vendedores = await Vendedor.all();
    res.render('veiculos/index', { veiculos, vendedores, title: 'Veículos' });
  },
  newForm: async (req, res) => {
    const vendedores = await Vendedor.all();
    res.render('veiculos/form', { veiculo: {}, vendedores, title: 'Novo Veículo' });
  },
  create: async (req, res) => {
    await Veiculo.create(req.body);
    res.redirect('/veiculos');
  },
  editForm: async (req, res) => {
    const veiculo = await Veiculo.findById(req.params.id);
    const vendedores = await Vendedor.all();
    res.render('veiculos/edit', { veiculo, vendedores, title: 'Editar Veículo' });
  },
  update: async (req, res) => {
    await Veiculo.update(req.params.id, req.body);
    res.redirect('/veiculos');
  },
  remove: async (req, res) => {
    await Veiculo.remove(req.params.id);
    res.redirect('/veiculos');
  }
};
