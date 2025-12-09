import { connection } from '../db.js';
import bcrypt from 'bcrypt';

export const registrar = (req, res) => {
  const { nome, email, senha } = req.body;
  if (!nome || !email || !senha) return res.status(400).json({ error: 'Campos incompletos' });

  const hash = bcrypt.hashSync(senha, 10);

  connection.query(
    'INSERT INTO usuario (nome, email, senha_hash) VALUES (?, ?, ?)',
    [nome, email, hash],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message || err });
      return res.status(201).json({ id_usuario: result.insertId, nome, email });
    }
  );
};

export const login = (req, res) => {
  const { email, senha } = req.body;
  if (!email || !senha) return res.status(400).json({ error: 'Campos incompletos' });

  connection.query('SELECT * FROM usuario WHERE email = ?', [email], (err, results) => {
    if (err) return res.status(500).json({ error: err.message || err });
    if (!results || results.length === 0) return res.status(404).json({ error: 'Usuário não encontrado' });

    const ok = bcrypt.compareSync(senha, results[0].senha_hash);
    if (!ok) return res.status(401).json({ error: 'Senha inválida' });

    // Não dependemos de session; retornar dados mínimos
    return res.json({ message: 'Login realizado', usuario: { id_usuario: results[0].id_usuario, nome: results[0].nome, email: results[0].email } });
  });
};