const db = require("./db.js");
// sinceramente usei para criar a tabela transacoes pois criar na mão tava foda, n serve pra nada pode ignorar
async function createTable() {
  await db.query(
    "CREATE TABLE IF NOT EXISTS transacoes( FOREIGN KEY (id_cliente) REFERENCES clientes(id), status VARCHAR(11),final_cartao CHAR(4),nome_cartao VARCHAR(255),valor REAL,metodo_pagamento VARCHAR(15),descricao VARCHAR(255))"
  );
  console.log("Created transacoes table");
}
