const { Router } = require('express');
const auth = require('../middlewares/auth.middleware');
const routes = new Router();

const userController = require('../controllers/user.controller');
const contactController = require('../controllers/contact.controller');
const authController = require('../controllers/auth.controller');

routes.post("/auth", authController.login);

routes.use(auth);
routes.get("/user", userController.index);
routes.post("/user", userController.store);

routes.get("/user/:id", userController.show);
routes.put("/user/:id", userController.update);
routes.delete("/user/:id", userController.destroy);



routes.get("/contacts", contactController.index);
routes.post("/contacts", contactController.store);

routes.get("/contacts/:id", contactController.show);
routes.put("/contacts/:id", contactController.update);
routes.delete("/contacts/:id", contactController.destroy);

module.exports = routes;


const { Pool } = require('pg');

async function conectar() {

  const pool = new Pool({
    //Padrão da url: postgres://aluno_[matrícula]:[Seis primeiros digitos do CPF]@l177.136.201.182:5439/temp?schema=aluno_[matrícula]
    connectionString: 'postgres://aluno_1549884:123456@177.136.201.182:5439/temp?schema=aluno_1549884'
  });

  //apenas testando a conexão
  const client = await pool.connect();
  console.log("Criou pool de conexões no PostgreSQL!");


  return client;
}

module.exports = { conectar }