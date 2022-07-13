const fee = require("./taxa.js");
const inserirTransacao = require("../db/_insertTransacao");
const numeroFinalCartao = require("./digitoCartao.js");
const payable = require("../cash out/payable.js");
const updateSaldo = require("../db/_updateSaldo.js");

module.exports = function controladorTransacao(obj) {
  // desconta a taxa de transacao de acordo com o metodo de pagamento
  let saldo = fee(obj.metPagamento, obj.valor);
  // define o status da transacao e o dia que foi feita
  let payables = payable(obj.metPagamento);
  // condicional basica que adiciona o saldo do cliente em "saldo_available" ou em "saldo_waiting_founds" de acordo com o status da transacao
  if (payables.status == "paid") {
    updateSaldo(obj.id_cliente, "saldo_available", saldo);
  } else if (payables.status == "waiting_founds") {
    updateSaldo(obj.id_cliente, "saldo_waiting_founds", saldo);
  }
  //pega todo o numero do cartão do cliente e retorna apenas os 4 ultimos digitos
  let digitos = numeroFinalCartao(obj.numeroCartao);
  // função que faz a transacao e insere no banco transacoes
  inserirTransacao(
    obj.id_cliente,
    payables.status,
    digitos,
    obj.nomeCartao,
    obj.valor,
    obj.metPagamento,
    obj.descricao,
    payables.payment_date
  );
};
