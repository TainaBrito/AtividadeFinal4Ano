import conexaoBancoDeDados from "../database/db_connection.js";

class authModel {
  async logar(nome, senha) {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSql = "SELECT * FROM usuarios WHERE nome = $1 AND senha = $2";
    const usuario = await conexao.query(comandoSql, [nome, senha]);
    return usuario.rows;
  }
}

export default new authModel();