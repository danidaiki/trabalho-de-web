const db = require('../database/db');
const bcrypt = require('bcrypt');

exports.registrar = (req, res) => {
  const { nome, email, senha } = req.body;
  const hash = bcrypt.hashSync(senha, 10);

  db.query(
    "INSERT INTO usuario (nome, email, senha_hash) VALUES (?, ?, ?)",
    [nome, email, hash],
    () => res.send("Usuário cadastrado")
  );
};

exports.login = (req, res) => {
  const { email, senha } = req.body;

  db.query("SELECT * FROM usuario WHERE email = ?", [email], (err, r) => {
    if (r.length === 0) return res.send("Usuário não encontrado");

    const ok = bcrypt.compareSync(senha, r[0].senha_hash);
    if (!ok) return res.send("Senha inválida");

    req.session.usuario = r[0];
    res.send("Login realizado");
  });
};