const express = require("express");
const payable = require("./cash out/payable.js");
const controladorTransacao = require("./cash in/controladorTransacao.js");
const inserirCliente = require("./controaldorCliente.js");
const listData = require("./db/_selectSaldo.js");
const listTransacoes = require("./db/_selectTransacoes.js");
const app = express();
app.use(express.json());
app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));
app.get("//consultarSaldo", (req, res) => {
  const cliente = new Object();
  cliente.nome = req.body.nome;
  cliente.cpf = req.body.cpf;
  async function resultado() {
    const resultado = await listData(cliente.nome, cliente.cpf);
    return res.status(200).json(resultado);
  }

  resultado();
});
app.post("//cadastrarCliente", (req, res) => {
  const cliente = new Object();
  cliente.nome = req.body.nome;
  cliente.cpf = req.body.cpf;
  try {
    const cliente_id = inserirCliente(cliente);
  } catch (error) {
    console.log(error);
  }

  console.log(cliente);
  return res.status(200).json(cliente_id);
});
app.post("//transacao", (req, res) => {
  let transacao = new Object();
  transacao.numeroCartao = req.body.numeroCartao;
  transacao.nomeCartao = req.body.nomeCartao;
  transacao.cvv = req.body.cvv;
  transacao.valor = req.body.valor;
  transacao.metPagamento = req.body.metPagamento;
  transacao.validade = req.body.validade;
  transacao.descricao = req.body.descricao;
  transacao.id_cliente = req.body.id_cliente;

  let cliente = new Object();
  cliente.nome = req.body.nome;
  cliente.cpf = req.body.cpf;
  try {
    controladorTransacao(transacao);
  } catch (err) {
    console.log(err);
  }
  return res.status(200).json({ message: "criado com sucesso" });
});
app.get("//consultarTransacao", (req, res) => {
  const cliente = new Object();
  async function resultado() {
    try {
      const resultado = await listTransacoes(req.body.cpf);
    } catch (error) {
      console.log(error);
    }

    return res.status(200).json(resultado);
  }

  resultado();
});
