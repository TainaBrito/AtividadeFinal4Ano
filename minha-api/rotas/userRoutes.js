import { Router } from "express";
import usuarioController from "../controllers/usuarioController.js";

const routes = new Router();

routes
  .get("/listarProdutos", usuarioController.listarProdutos)
  .post("/cadastro", usuarioController.cadastrar)
  .put("/atualizarProdutos", usuarioController.atualizarProduto)
  .delete("/deletarProduto/:id", usuarioController.deletarProduto);

export default routes;