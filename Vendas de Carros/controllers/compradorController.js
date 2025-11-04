const Comprador = require('../models/compradorModel');

module.exports = {
  index: async (req, res) => {
    const compradores = await Comprador.all();
    res.render('compradores/index', { compradores, title: 'Compradores' });
  },
  newForm: (req, res) => {
    res.render('compradores/form', { comprador: {}, title: 'Novo Comprador' });
  },
  create: async (req, res) => {
    await Comprador.create(req.body);
    res.redirect('/compradores');
  },
  editForm: async (req, res) => {
    const comprador = await Comprador.findById(req.params.id);
    res.render('compradores/edit', { comprador, title: 'Editar Comprador' });
  },
  update: async (req, res) => {
    await Comprador.update(req.params.id, req.body);
    res.redirect('/compradores');
  },
  remove: async (req, res) => {
    await Comprador.remove(req.params.id);
    res.redirect('/compradores');
  }
};
