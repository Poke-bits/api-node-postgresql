const db = require("./db.js");
// lista todas as transações
module.exports = async function listTransacoes(cpf) {
  let result = [];
  result = await db.query(
    `SELECT * FROM clientes INNER JOIN transacoes ON clientes.id = transacoes.id_cliente
    WHERE cpf ='${cpf}';`
  );
  return result.rows;
};
