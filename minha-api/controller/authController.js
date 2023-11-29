import jwt from "jsonwebtoken";
import authModel from "../models/authModel.js";

class authController {
  async logar(req, res) {
    const { nome, senha } = req.body;
    if (!nome) {
      return res
        .status(400)
        .send({ login: false, message: "Digite seu nome" });
    }
    if (!senha) {
      return res
        .status(400)
        .send({ login: false, message: "Digite sua senha" });
    }
    try {
      const usuario = await authModel.logar(nome, senha);
      if (usuario.length == 0) {
        return res
          .status(404)
          .send({ login: false, message: "Não Autorizado" });
      }
      const token = jwt.sign(
        {
          id: usuario[0].id,
          email: usuario[0].email,
        },
        `${process.env.SECRET}`,
        {
          expiresIn: "30min",
        }
      );
      return res.status(200).send({ login: true, token: token });
    } catch (error) {
      return res
        .status(404)
        .send({ login: false, message: `Erro ao logar - ${error}` });
    }
  }
}

export default new authController();