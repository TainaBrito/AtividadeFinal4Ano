
// Definindo um array para armazenar os produtos da loja
const produtos = [];

// Definindo um array para armazenar os clientes
const clientes = [];

// Definindo um array para armazenar as vendas
const vendas = [];

// Definindo um array para deletar os produtos
const deletar = [];

// Função para adicionar um produto ao estoque
function adicionarProduto(nome, preco, quantidade) {
  const produto = {
    nome,
    preco,
    quantidade,
  };
  produtos.push(produto);
  console.log(`Produto ${nome} adicionado ao estoque.`);
}

// Função para adicionar um cliente
function adicionarCliente(nome, email) {
  const cliente = {
    nome,
    email,
  };
  clientes.push(cliente);
  console.log(`Cliente ${nome} adicionado.`);
}

// Função para realizar uma venda
function realizarVenda(cliente, produtosVendidos) {
  const venda = {
    cliente,
    produtosVendidos,
    data: new Date(),
  };

  vendas.push(venda);

  let total = 0;
  for (const produto of produtosVendidos) {
    const produtoNoEstoque = produtos.find((p) => p.nome === produto.nome);
    if (produtoNoEstoque && produtoNoEstoque.quantidade >= produto.quantidade) {
      total += produto.quantidade * produtoNoEstoque.preco;
      produtoNoEstoque.quantidade -= produto.quantidade;
    } else {
      console.log(`Produto ${produto.nome} fora de estoque.`);
      return;
    }
  }

  console.log(`Venda realizada para ${cliente.nome}. Total: R$ ${total}`);
}

// Função para deletar um produto
function deletarProdutoDoEstoque(nome, quantidade) {
    const produto = {
      nome,
      quantidade,
    };
    produto.push(produto);
    console.log(`Produto ${nome} deletado.`);
  }

// Exemplo de uso:
adicionarProduto("Batom", 10.99, 50);
adicionarProduto("Sombra", 15.99, 30);


adicionarCliente("Maria", "maria@example.com");
adicionarCliente("João", "joao@example.com");


deletarProdutoDoEstoque("Batom", "5");
deletarProdutoDoEstoque("Sombra", "10");


realizarVenda(clientes[0], [
  { nome: "Batom", quantidade: 2 },
  { nome: "Sombra", quantidade: 3 },
]);