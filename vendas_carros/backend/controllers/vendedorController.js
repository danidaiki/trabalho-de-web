import { connection } from '../db.js';

export const listar = (req, res) => {
  connection.query('SELECT * FROM vendedor', (err, results) => {
    if (err) return res.status(500).json({ error: err.message || err });
    return res.json(results);
  });
};

export const cadastrar = (req, res) => {
  const { nome, email, telefone, rede_social } = req.body;
  if (!nome) return res.status(400).json({ error: 'Nome é obrigatório' });

  connection.query(
    'INSERT INTO vendedor (nome,email,telefone,rede_social) VALUES (?,?,?,?)',
    [nome, email, telefone, rede_social],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message || err });
      return res.status(201).json({ id_vendedor: result.insertId, nome, email, telefone, rede_social });
    }
  );
};

export const excluir = (req, res) => {
  connection.query('DELETE FROM vendedor WHERE id_vendedor = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message || err });
    return res.json({ message: 'Vendedor excluído' });
  });
};