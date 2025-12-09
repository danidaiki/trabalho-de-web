const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'venda_carros'
});

connection.connect(err => {
  if (err) console.log('Erro no banco:', err);
  else console.log('Banco conectado!');
});

module.exports = connection;