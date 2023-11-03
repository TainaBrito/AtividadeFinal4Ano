Controler

// Definindo um objeto para representar o estoque
const estoque = {};

// Função para adicionar um produto ao estoque
function adicionarProdutoAoEstoque(nome, quantidadeInicial) {
  if (!estoque[nome]) {
    estoque[nome] = quantidadeInicial;
  } else {
    estoque[nome] += quantidadeInicial;
  }
  console.log(`${quantidadeInicial} unidades de ${nome} foram adicionadas ao estoque.`);
}

// Função para atualizar a quantidade de um produto no estoque
function atualizarQuantidadeNoEstoque(nome, quantidade) {
  if (estoque[nome] !== undefined) {
    estoque[nome] = quantidade;
    console.log(`A quantidade de ${nome} no estoque foi atualizada para ${quantidade}.`);
  } else {
    console.log(`Produto ${nome} não encontrado no estoque.`);
  }
}

// Função para listar o estoque atual
function listarEstoque() {
  console.log("Estoque atual:");
  for (const produto in estoque) {
    console.log(`${produto}: ${estoque[produto]} unidades`);
  }
}

// Função para deletar um produto do estoque
function deletarProdutoDoEstoque(nome, quantidadeInicial) {
  if (!estoque[nome]) {
    estoque[nome] = quantidadeInicial;
  } else {
    estoque[nome] -= quantidadeInicial;
  }
  console.log(`${quantidadeInicial} unidades de ${nome} foram deletadas do estoque.`);
}

// Exemplo de uso:
adicionarProdutoAoEstoque("Batom", 50);
adicionarProdutoAoEstoque("Sombra", 30);
listarEstoque();

atualizarQuantidadeNoEstoque("Batom", 40);
listarEstoque();

deletarProdutoDoEstoque("Batom", 10);
listarEstoque();