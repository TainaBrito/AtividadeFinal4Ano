import usuarioModel from "../models/usuarioModel.js";

class UsuarioController {
  async listar(req, res) {
    try {
      const produto = await usuarioModel.listar();
      return res.status(200).send(produtos);
    } catch (error) {
      return res
        .status(500)
        .send({ message: `Erro ao listar produtos - ${error}` });
    }
  }
  async cadastrar(req, res) {
    const { nome, numeroTelefone } = req.body;
    if (!nome) {
      return res.status(400).send({ message: "Digite o nome do cliente" });
    }
    if (!numeroTelefone) {
      return res.status(400).send({ message: "Digite o número de teleone do cliente" });
    }
    try {
      const resultado = await usuarioModel.cadastrar(nome, numeroTelefone);
      return res
        .status(201)
        .send({ message: "Cliente cadastrado com sucesso" });
    } catch (error) {
      res.status(400).send({ message: `Erro ao cadastrar cliente - ${error}` });
    }
  }
  async deletarProduto(req, res) {
    try {
      const idDoProduto = parseInt(req.params.id);
      const resp = await usuarioModel.deletarProduto(idDoProduto);
      res.status(500).send({ message: "Deletado com sucesso" });
    } catch (error) {
      res.status(500).send({ message: `Erro ao deletar produto - ${error}` });
    }
  }
  async cadastrarProduto(req, res) {
    const { idProduto, quantidade} = req.body;
    try {
      const retorno = await usuarioModel.cadastrarProduto(
        idProduto,
        quantidade
      );
      res.status(200).send({ message: "Produto cadastrado com Sucesso!" });
    } catch (error) {
      res.status(500).send({ message: `Erro ao cadastrar pedido - ${error}` });
    }
  }
  async atualizarProduto(req, res) {
    const { idProduto, novoIdProduto, novaQuantidade } = req.body;
    try {
      await usuarioModel.atualizarProduto(
        idProduto,
        novoIdProduto,
        novaQuantidade
      );
      res.status(200).send({ message: "Produto atualizado!" });
    } catch (error) {
      res.status(500).send({ message: `Erro ao atualizar produto - ${error}` });
    }
  }
  
}


export default new UsuarioController();