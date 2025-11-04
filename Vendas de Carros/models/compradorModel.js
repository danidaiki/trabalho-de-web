const db = require('../config/db');

const Comprador = {
  async all() {
    const [rows] = await db.query('SELECT * FROM comprador ORDER BY data_cadastro DESC');
    return rows;
  },
  async findById(id) {
    const [rows] = await db.query('SELECT * FROM comprador WHERE id_comprador = ?', [id]);
    return rows[0];
  },
  async create(data) {
    const { nome, email, telefone, rede_social } = data;
    const [r] = await db.query('INSERT INTO comprador (nome, email, telefone, rede_social) VALUES (?, ?, ?, ?)', [nome, email, telefone, rede_social]);
    return r.insertId;
  },
  async update(id, data) {
    const { nome, email, telefone, rede_social } = data;
    await db.query('UPDATE comprador SET nome=?, email=?, telefone=?, rede_social=? WHERE id_comprador=?', [nome, email, telefone, rede_social, id]);
  },
  async remove(id) {
    await db.query('DELETE FROM comprador WHERE id_comprador = ?', [id]);
  }
};

module.exports = Comprador;
