# Venda Carros - Projeto completo (MVC) - Node.js + Express + EJS + MySQL

**Conteúdo:** aplicação pronta com autenticação (tabela `usuario`), CRUDs para vendedor, comprador, veículo e venda, organização MVC, views EJS e Bootstrap.

## Como usar

1. Copie para sua máquina e entre na pasta:
   ```
   cd venda_carros_project
   ```

2. Instale dependências:
   ```
   npm install
   ```

3. Crie o banco `venda_carros` usando o script SQL fornecido (`sql/schema.sql`) ou importe pelo MySQL.

4. Crie um arquivo `.env` baseado em `.env.example` e ajuste DB_USER/DB_PASSWORD conforme seu MySQL local.

5. Rode:
   ```
   npm start
   ```

6. Abra no navegador:
   ```
   http://localhost:3000
   ```

## Observações
- A tabela `usuario` é separada de `vendedor`. Usuários podem logar e gerenciar o sistema. Vendedores são apenas dados do negócio.
- Senhas são armazenadas com bcrypt.
- Para produção, altere o session store (Redis) e use HTTPS.
