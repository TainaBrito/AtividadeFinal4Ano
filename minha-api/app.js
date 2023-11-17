const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para lidar com dados JSON
app.use(express.json());

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Bem-vindo à minha API!');
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});