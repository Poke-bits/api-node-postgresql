const db = require("./db.js");
// função que insere as rows da tabela clientes( serve para cadastrar o cliente dentro do banco de dados)
module.exports = async function insertData(cliente_id, nome, cpf) {
  await db.query(
    `INSERT INTO clientes (id,nome,cpf,saldo_available,saldo_waiting_founds) VALUES ('${cliente_id}', '${nome}', '${cpf}',0.0,0.0)`
  );
  console.log("cliente inserido");
  return cliente_id;
};
