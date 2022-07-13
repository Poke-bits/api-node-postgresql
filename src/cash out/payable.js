const { addDays, toDate } = require("date-fns");
//atribui o data de pagamento da transação e o status da transação
module.exports = function payables(metodPagamento) {
  data = toDate(new Date());

  payables = new Object();
  if (metodPagamento == "debit_card") {
    payables.status = "paid";
    payables.payment_date = addDays(data, 0);
  } else if (metodPagamento == "credit_card") {
    payables.status = "waiting_founds";
    payables.payment_date = addDays(data, 30);
  }

  return payables;
};
