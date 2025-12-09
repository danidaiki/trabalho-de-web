import mysql from 'mysql2';

export const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@aluno123',
  database: 'vendas_carros'
});

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar no MySQL:', err.message || err);
    // Não lança exceção para que o servidor possa iniciar e responder com 5xx
    return;
  }
  console.log("MySQL conectado!");
});
