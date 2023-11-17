// Definindo um objeto para representar o estoque
const estoque = {};

// Função para adicionar um produto ao estoque
function adicionarProdutoAoEstoque(req, res) {
  const {nome, quantidadeInicial} = req.body;
  if (!estoque[nome]) {
    estoque[nome] = quantidadeInicial;
  } else {
    estoque[nome] += quantidadeInicial;
  }
  console.log(`${quantidadeInicial} unidades de ${nome} foram adicionadas ao estoque.`);
  
    res.send('Produtos adicionados');
  
  
}

// Função para adicionar um cliente ao sistema
function adicionarClienteAoSistema(req, res) {
  const{ nome,numeroTelefone} = req.body
  if (!sistema[nome]) {
    sistema[nome] = nome;
  } else {
    sistema[numeroTelefone] = numeroTelefone;
  }
  console.log(`${nome} foi adicionado ao sistema.`);
 
    res.send('Cliente adicionado');
  
  
}

// Função para atualizar a quantidade de um produto no estoque
function atualizarQuantidadeNoEstoque(req, res) {
  const{ nome, quantidade} = req.body
  if (estoque[nome] !== undefined) {
    estoque[nome] = quantidade;
    console.log(`A quantidade de ${nome} no estoque foi atualizada para ${quantidade}.`);
  } else {
    console.log(`Produto ${nome} não encontrado no estoque.`);
  }

    res.send('Produtos Atualizados');
  
}

// Função para listar o estoque atual
function listarEstoque(req, res) {
  const{ estoque} = req.body
  console.log("Estoque atual:");
  for (const produto in estoque) {
    console.log(`${produto}: ${estoque[produto]} unidades`);
  }
    res.send('Quantidade de produtos');

  
}

// Função para deletar um produto do estoque
function deletarProdutoDoEstoque(nome, quantidadeInicial) {
  if (!estoque[nome]) {
    estoque[nome] = quantidadeInicial;
  } else {
    estoque[nome] -= quantidadeInicial;
  }
  console.log(`${quantidadeInicial} unidades de ${nome} foram deletadas do estoque.`);

  app.get('/', (req, res) => {
    res.send('Produtos deletados');
  });
  
}

// Exemplo de uso:
adicionarProdutoAoEstoque("Batom", 50);
adicionarProdutoAoEstoque("Sombra", 30);
listarEstoque();

atualizarQuantidadeNoEstoque("Batom", 40);
listarEstoque();

deletarProdutoDoEstoque("Batom", 10);
listarEstoque();

module.exports = {adicionarProdutoAoEstoque}
module.exports = {adicionarClienteAoSistema}
module.exports = {atualizarQuantidadeNoEstoque}
module.exports = {listarEstoque}
module.exports = {deletarProdutoDoEstoque}

