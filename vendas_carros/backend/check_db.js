import { connection } from './db.js';

connection.query("SHOW TABLES LIKE 'veiculo'", (err, results) => {
  if (err) {
    console.error('Erro ao executar query:', err.message || err);
    process.exit(1);
  }

  if (!results || results.length === 0) {
    console.log('Tabela `veiculo` NÃO encontrada no banco `vendas_carros`.');
    console.log('Dica: importe o arquivo SQL em `../sql/vendas_carros.sql` para criar o banco/tabelas.');
    process.exit(0);
  }

  console.log('Tabela `veiculo` encontrada:');
  console.log(results);
  process.exit(0);
});
