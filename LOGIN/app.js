const express = require('express');
const path = require('path');
const app = express();

// Configura o EJS como motor de views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Permite arquivos estáticos (CSS, imagens, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Permite ler dados do formulário
app.use(express.urlencoded({ extended: true }));

// Rota GET para abrir a tela de login
app.get('/', (req, res) => {
  res.render('login');
});

// Rota POST para tratar o login
app.post('/login', (req, res) => {
  const { username, password, remember } = req.body;
  res.send(`Usuário: ${username}, Senha: ${password}, Lembrar: ${remember}`);
});

// Inicia o servidor
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
