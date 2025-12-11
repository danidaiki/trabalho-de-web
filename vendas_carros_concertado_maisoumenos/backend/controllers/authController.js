import db from '../db.js';
import bcrypt from 'bcrypt';

export const login = (req, res) => {
  const { email, senha } = req.body;
  if (!email || !senha) return res.status(400).json({ error: 'Dados incompletos' });

  connection.query('SELECT * FROM usuario WHERE email = ?', [email], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!results || results.length === 0) return res.status(404).json({ error: 'Usuário não encontrado' });

    const user = results[0];
    const ok = bcrypt.compareSync(senha, user.senha_hash);
    if (!ok) return res.status(401).json({ error: 'Senha inválida' });

    req.session.usuario = { id: user.id, nome: user.nome, email: user.email };

    res.json({ success: true, user: { id: user.id, nome: user.nome, email: user.email } });
  });
};
export const registrar = (req, res) => {
  const { nome, email, senha } = req.body;
  if (!nome || !email || !senha) return res.status(400).json({ error: 'Dados incompletos' });

  const senha_hash = bcrypt.hashSync(senha, 10);

  connection.query(
    'INSERT INTO usuario (nome, email, senha_hash) VALUES (?, ?, ?)',
    [nome, email, senha_hash],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });

      res.status(201).json({ id: result.insertId, nome, email });
    }
  );
}