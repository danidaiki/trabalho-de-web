const db = require('../database/db');

exports.listar = (req, res) => {
  db.query("SELECT * FROM vendedor", (err, r) => res.json(r));
};

exports.cadastrar = (req, res) => {
  const { nome, email, telefone, rede_social } = req.body;
  db.query(
    "INSERT INTO vendedor (nome,email,telefone,rede_social) VALUES (?,?,?,?)",
    [nome, email, telefone, rede_social],
    () => res.send("Vendedor cadastrado")
  );
};

exports.excluir = (req, res) => {
  db.query("DELETE FROM vendedor WHERE id_vendedor = ?", [req.params.id],
    () => res.send("Vendedor excluído")
  );
};