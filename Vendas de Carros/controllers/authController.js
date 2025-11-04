const bcrypt = require('bcrypt');
const User = require('../models/usuarioModel');

module.exports = {
  showRegister: (req, res) => {
    res.render('auth/register', { title: 'Registrar' });
  },
  showLogin: (req, res) => {
    res.render('auth/login', { title: 'Login' });
  },
  register: async (req, res) => {
    try {
      const { nome, email, senha } = req.body;
      if (!nome || !email || !senha) {
        req.flash('error', 'Preencha todos os campos');
        return res.redirect('/register');
      }
      const existing = await User.findByEmail(email);
      if (existing) {
        req.flash('error', 'Email já cadastrado');
        return res.redirect('/register');
      }
      const hash = await bcrypt.hash(senha, 10);
      await User.create({ nome, email, senha_hash: hash });
      req.flash('success', 'Conta criada. Faça login.');
      return res.redirect('/login');
    } catch (err) {
      console.error(err);
      req.flash('error', 'Erro no registro');
      return res.redirect('/register');
    }
  },
  login: async (req, res) => {
    try {
      const { email, senha } = req.body;
      const user = await User.findByEmail(email);
      if (!user) {
        req.flash('error', 'Usuário não encontrado');
        return res.redirect('/login');
      }
      const ok = await bcrypt.compare(senha, user.senha_hash);
      if (!ok) {
        req.flash('error', 'Senha inválida');
        return res.redirect('/login');
      }
      req.session.userId = user.id;
      req.session.userName = user.nome;
      return res.redirect('/');
    } catch (err) {
      console.error(err);
      req.flash('error', 'Erro no login');
      return res.redirect('/login');
    }
  },
  logout: (req, res) => {
    req.session.destroy(() => {
      res.redirect('/login');
    });
  }
};
