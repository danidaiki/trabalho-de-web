const db = require('../config/db');

const Veiculo = {
  async allWithVendedor() {
    const [rows] = await db.query(
      `SELECT v.*, ven.nome AS vendedor_nome
       FROM veiculo v
       LEFT JOIN vendedor ven ON v.id_vendedor = ven.id_vendedor
       ORDER BY v.id_veiculo DESC`
    );
    return rows;
  },
  async findById(id) {
    const [rows] = await db.query('SELECT * FROM veiculo WHERE id_veiculo = ?', [id]);
    return rows[0];
  },
  async create(data) {
    const { marca, modelo, ano, categoria, preco, id_vendedor } = data;
    const [r] = await db.query('INSERT INTO veiculo (marca, modelo, ano, categoria, preco, id_vendedor) VALUES (?, ?, ?, ?, ?, ?)', [marca, modelo, ano || null, categoria, preco || null, id_vendedor || null]);
    return r.insertId;
  },
  async update(id, data) {
    const { marca, modelo, ano, categoria, preco, id_vendedor } = data;
    await db.query('UPDATE veiculo SET marca=?, modelo=?, ano=?, categoria=?, preco=?, id_vendedor=? WHERE id_veiculo=?', [marca, modelo, ano || null, categoria, preco || null, id_vendedor || null, id]);
  },
  async remove(id) {
    await db.query('DELETE FROM veiculo WHERE id_veiculo = ?', [id]);
  }
};

module.exports = Veiculo;
