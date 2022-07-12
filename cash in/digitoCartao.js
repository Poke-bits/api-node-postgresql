// pega o numero do cartão e retorna apenas os 4 ultimos caracteres do cartão
module.exports = function numeroFinalCartao(num) {
  num = num
    .split("")
    .reverse()
    .slice(1 - 5);
  num.reverse();
  let digitos = num.join("");
  console.log(digitos);

  return digitos;
};
