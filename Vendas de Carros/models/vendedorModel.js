const db = require('../config/db');

const Vendedor = {
  async all() {
    const [rows] = await db.query('SELECT * FROM vendedor ORDER BY data_cadastro DESC');
    return rows;
  },
  async findById(id) {
    const [rows] = await db.query('SELECT * FROM vendedor WHERE id_vendedor = ?', [id]);
    return rows[0];
  },
  async create(data) {
    const { nome, email, telefone, rede_social } = data;
    const [r] = await db.query('INSERT INTO vendedor (nome, email, telefone, rede_social) VALUES (?, ?, ?, ?)', [nome, email, telefone, rede_social]);
    return r.insertId;
  },
  async update(id, data) {
    const { nome, email, telefone, rede_social } = data;
    await db.query('UPDATE vendedor SET nome=?, email=?, telefone=?, rede_social=? WHERE id_vendedor=?', [nome, email, telefone, rede_social, id]);
  },
  async remove(id) {
    await db.query('DELETE FROM vendedor WHERE id_vendedor = ?', [id]);
  }
};

module.exports = Vendedor;
