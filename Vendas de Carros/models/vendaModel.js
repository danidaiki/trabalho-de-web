const db = require('../config/db');

const Venda = {
  async allWithDetails() {
    const [rows] = await db.query(
      `SELECT s.*, ven.nome AS vendedor_nome, c.nome AS comprador_nome, v.marca, v.modelo
       FROM venda s
       LEFT JOIN vendedor ven ON s.id_vendedor = ven.id_vendedor
       LEFT JOIN comprador c ON s.id_comprador = c.id_comprador
       LEFT JOIN veiculo v ON s.id_veiculo = v.id_veiculo
       ORDER BY s.data_venda DESC`
    );
    return rows;
  },
  async create(data) {
    const { id_vendedor, id_comprador, id_veiculo, data_venda, valor_venda } = data;
    const [r] = await db.query('INSERT INTO venda (id_vendedor, id_comprador, id_veiculo, data_venda, valor_venda) VALUES (?, ?, ?, ?, ?)', [id_vendedor || null, id_comprador || null, id_veiculo || null, data_venda || null, valor_venda || null]);
    return r.insertId;
  },
  async remove(id) {
    await db.query('DELETE FROM venda WHERE id_venda = ?', [id]);
  }
};

module.exports = Venda;
