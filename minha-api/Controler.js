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
  app.get('/', (req, res) => {
    res.send('Produtos adicionados');
  });
  
}

// Função para adicionar um cliente ao sistema
function adicionarClienteAoSistema(nome, numeroTelefone) {
  if (!sistema[nome]) {
    sistema[nome] = nome;
  } else {
    sistema[numeroTelefone] = numeroTelefone;
  }
  console.log(`${nome} foi adicionado ao sistema.`);
  app.get('/', (req, res) => {
    res.send('Cliente adicionado');
  });
  
}

// Função para atualizar a quantidade de um produto no estoque
function atualizarQuantidadeNoEstoque(nome, quantidade) {
  if (estoque[nome] !== undefined) {
    estoque[nome] = quantidade;
    console.log(`A quantidade de ${nome} no estoque foi atualizada para ${quantidade}.`);
  } else {
    console.log(`Produto ${nome} não encontrado no estoque.`);
  }

  app.get('/', (req, res) => {
    res.send('Produtos Atualizados');
  });
  
}

// Função para listar o estoque atual
function listarEstoque() {
  console.log("Estoque atual:");
  for (const produto in estoque) {
    console.log(`${produto}: ${estoque[produto]} unidades`);
  }

  app.get('/', (req, res) => {
    res.send('Quantidade de produtos');
  });
  
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