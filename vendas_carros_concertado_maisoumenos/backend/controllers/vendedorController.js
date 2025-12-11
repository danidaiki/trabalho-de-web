import db from '../db.js';

export const listar = (req, res) => {
  connection.query('SELECT * FROM vendedor', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

export const cadastrar = (req, res) => {
  const { nome, email, telefone, rede_social } = req.body;
  connection.query(
    'INSERT INTO vendedor (nome,email,telefone,rede_social) VALUES (?,?,?,?)',
    [nome, email, telefone, rede_social],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ id_vendedor: result.insertId, nome, email, telefone, rede_social });
    }
  );
};

export const excluir = (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM vendedor WHERE id_vendedor = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Não encontrado' });
    res.json({ message: 'Vendedor excluído' });
  });
};
