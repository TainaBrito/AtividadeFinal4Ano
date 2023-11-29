import conexaoBancoDeDados from "../database/db_connection.js";

class produtoModel {
  async listarProdutos() {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSql = "SELECT * FROM produtos";
    const produtos = await conexao.query(comandoSql);
    return produtos.rows;
  }
  async cadastrarClientes(nome, numeroTelefone) {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSql = "INSERT INTO clientes (nome, numero de telefone) VALUES ($1, $2)";
    return await conexao.query(comandoSql, [nome, numeroTelefone]);
  }
  async cadastrarProdutos(idProduto, quantidadeInicial) {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSql = "INSERT INTO produtos (idProduto, quantidade inicial) VALUES ($1, $2)";
    return await conexao.query(comandoSql, [idProduto, quantidadeInicial]);
  }
  async deletarProduto(idProduto) {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSql = "DELETE FROM produtos WHERE idProduto = ($1)";
    const resp = await conexao.query(comandoSql, [idProduto]);
    return resp;
  }
  async atualizarProduto(idProduto, novoIdProduto, novaQuantidade) {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSql =
      "UPDATE produtos SET idProduto = ($1), quantidade = ($2) WHERE idProduto = ($3)";
    return await conexao.query(comandoSql, [
      novoIdProduto,
      novaQuantidade,
      idProduto,
    ]);
  }
}
export default new usuarioModel();