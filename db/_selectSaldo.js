const db = require("./db.js");
// função que faz uma consulta ao banco de dados de acordo com o nome e cpf do cliente
module.exports = async function listData(nome, cpf) {
  let result = [];
  result = await db.query(
    `SELECT saldo_available,saldo_waiting_founds FROM clientes WHERE (nome = '${nome}' AND cpf = '${cpf}')`
  );
  return result.rows;
};
