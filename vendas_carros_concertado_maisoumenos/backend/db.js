import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@aluno123',
  database: 'vendas_carros'
});

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err.message || err);
    process.exit(1);
  }
  console.log('Conectado ao MySQL');
});

export default connection;
