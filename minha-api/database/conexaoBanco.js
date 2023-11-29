import pg from "pg";

async function conectar() {
  const pool = new pg.Pool({
    connectionString: `postgres://aluno_20201214010015:126925@177.136.201.182:5439/temp?schema=aluno_20201214010015`,
  });
  const conexaoBancoDeDados = await pool.connect();
  console.log("O banco de dados foi conectado");

  return conexaoBancoDeDados;
}

export default { conectar };