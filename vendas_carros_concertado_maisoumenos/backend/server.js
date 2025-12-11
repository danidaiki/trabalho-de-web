import express from 'express';
import cors from 'cors';
import session from 'express-session';
import path from 'path';
import routes from './routes/index.js';
import './db.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));

app.use(session({
  secret: "chave-secreta",
  resave: false,
  saveUninitialized: false
}));

app.use("/", routes);

app.get("/", (req, res) => {
  res.send("API funcionando!");
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
app.use(express.static(path.join(__dirname, '..', 'frontend')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});