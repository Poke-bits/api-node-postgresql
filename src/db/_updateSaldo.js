const db = require("./db.js");
module.exports = async function updateSaldo(cliente_id, metSaldo, saldo) {
  //await db.connect();
  await db.query(
    `UPDATE clientes SET ${metSaldo} = ${saldo}+ ${metSaldo}
    WHERE id = '${cliente_id}';`
  );
  //db.end(() => {});
  console.log("saldo atualizado");
};
