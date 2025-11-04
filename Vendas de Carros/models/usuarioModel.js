const db = require('../config/db');

const User = {
  async findByEmail(email) {
    const [rows] = await db.query('SELECT * FROM usuario WHERE email = ?', [email]);
    return rows[0];
  },
  async create({ nome, email, senha_hash }) {
    const [res] = await db.query('INSERT INTO usuario (nome, email, senha_hash) VALUES (?, ?, ?)', [nome, email, senha_hash]);
    return res.insertId;
  },
  async findById(id) {
    const [rows] = await db.query('SELECT * FROM usuario WHERE id = ?', [id]);
    return rows[0];
  }
};

module.exports = User;
