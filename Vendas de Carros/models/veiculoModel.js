// Em desenvolvimento: completar funções de create, update, remove
const db = require('../config/db');
module.exports = {
  async allWithVendedor(){ const [r]=await db.query(`SELECT v.*, ven.nome AS vendedor_nome FROM veiculo v LEFT JOIN vendedor ven ON v.id_vendedor=ven.id_vendedor ORDER BY v.id_veiculo DESC`); return r; }
  // comletar funções create, update, remove
};
