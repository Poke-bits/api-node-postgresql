// verifica se o metodo de transação é credito ou debito e aplica a taxa sobre a transação alem de setar o payment_date para 0 como debito e 30 como credito
module.exports = function fee(metodTransac, valorTransac) {
  if (metodTransac == "debit_card") {
    const valorDescontado = valorTransac - (valorTransac * 0, 03);
    console.log(valorDescontado);
    return valorDescontado;
  } else if (metodTransac == "credit_card") {
    const valorDescontado = valorTransac - (valorTransac * 0, 05);
    console.log(valorDescontado);
    return valorDescontado;
  }
};
