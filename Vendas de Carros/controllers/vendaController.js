const Venda = require('../models/vendaModel');
const Vendedor = require('../models/vendedorModel');
const Comprador = require('../models/compradorModel');
const Veiculo = require('../models/veiculoModel');

module.exports = {
  index: async (req, res) => {
    const vendas = await Venda.allWithDetails();
    const vendedores = await Vendedor.all();
    const compradores = await Comprador.all();
    const veiculos = await Veiculo.allWithVendedor();
    res.render('vendas/index', { vendas, vendedores, compradores, veiculos, title: 'Vendas' });
  },
  create: async (req, res) => {
    await Venda.create(req.body);
    res.redirect('/vendas');
  },
  remove: async (req, res) => {
    await Venda.remove(req.params.id);
    res.redirect('/vendas');
  }
};
