require('dotenv').config();
const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const path = require('path');

const authRoutes = require('./routes/auth');
const vendedorRoutes = require('./routes/vendedores');
const compradorRoutes = require('./routes/compradores');
const veiculoRoutes = require('./routes/veiculos');
const vendaRoutes = require('./routes/vendas');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET || 'troque_esta_chave',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000*60*60*2 }
}));
app.use(flash());

// tornar dados disponíveis nas views
app.use((req, res, next) => {
  res.locals.currentUser = req.session.userName || null;
  res.locals.flash = req.flash();
  next();
});

app.use('/', authRoutes); // login, register, logout
app.use('/vendedores', vendedorRoutes);
app.use('/compradores', compradorRoutes);
app.use('/veiculos', veiculoRoutes);
app.use('/vendas', vendaRoutes);

app.get('/', (req, res) => {
  res.render('dashboard', { title: 'Dashboard' });
});

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
