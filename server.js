import express from "express";
import cors from "cors";
import path from 'path';
import routes from "./vendas_carros/backend/routes.js";
import './vendas_carros/backend/db.js';

const app = express();

app.use(cors());
app.use(express.json());

// Servir uploads (se houver) a partir da pasta do backend e da raiz
app.use('/uploads', express.static(path.join(process.cwd(), 'vendas_carros', 'backend', 'uploads')));
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

// Servir frontend estático
const frontendPath = path.join(process.cwd(), 'vendas_carros', 'frontend');
app.use(express.static(frontendPath));

// Rotas da API
app.use('/api', routes);

// Rota raiz -> index.html do frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
