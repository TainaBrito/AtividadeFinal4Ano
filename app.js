const express = require('express');
const app = express();
const PORT = 3000;
const controllers = require("./Controler")
// Middleware para lidar com dados JSON
app.use(express.json());

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Bem-vindo à minha API!');
});
app.post('/adicionar', controllers.adicionarProdutoAoEstoque);
app.post('/deletar', controllers.deletarProdutoDoEstoque);
app.post('/atualizar', controllers.atualizarQuantidadeNoEstoque);
app.post('/adicionarC', controllers.adicionarClienteAoSistema);
app.post('/listar', controllers.listarEstoque);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});