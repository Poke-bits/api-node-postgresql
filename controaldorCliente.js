const insertData = require("./db/_insertClient.js");
const generate = require("./geradorIdCliente.js");
module.exports = function inserirCliente(obj) {
  let cliente_id = generate();
  insertData(cliente_id, obj.nome, obj.cpf, obj.saldo);
  return cliente_id;
};
