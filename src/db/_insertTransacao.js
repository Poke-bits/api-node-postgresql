const db = require("./db.js");
//funcão que insere a transacao no banco de dados
module.exports = async function inserirTransacao(
  id_cliente,
  status,
  final_cartao,
  nome_cartao,
  valor,
  metodo_pagamento,
  descricao,
  payment_date
) {
  await db.query(
    `INSERT INTO transacoes (id_cliente,status,final_cartao,nome_cartao,valor,metodo_pagamento,descricao,payment_date) VALUES ('${id_cliente}', '${status}', '${final_cartao}', '${nome_cartao}', '${valor}', '${metodo_pagamento}', '${descricao}','${payment_date}')`
  );
};
