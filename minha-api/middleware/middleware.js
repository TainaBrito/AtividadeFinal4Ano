import usuarioModel from "../models/usuarioModel.js";
import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "Falha na autorização" });
  }
  const token = req.headers.authorization.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.SECRET);

    const usuario = await usuarioModel.find(payload.id);
    if (!usuario) {
      return res.status(401).json({ message: "Falha na autorização" });
    }
  } catch (error) {
    return res.status(401).json({ message: "Falha na autorização" });
  }

  next();
}

export default auth;
