// Em desenvolvimento: funções básicas implementadas, falta validação e tratamentos de erro
const db = require('../config/db');
module.exports = {
  async all(){ const [r]=await db.query('SELECT * FROM comprador ORDER BY id_comprador DESC'); return r; },
  async create(data){ const {nome,email,telefone,rede_social}=data; const [r]=await db.query('INSERT INTO comprador (nome,email,telefone,rede_social) VALUES (?,?,?,?)',[nome,email,telefone,rede_social]); return r.insertId; }
  // TODO: add findById, update, remove
};
