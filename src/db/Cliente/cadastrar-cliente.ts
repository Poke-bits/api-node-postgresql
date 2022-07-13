import db from "../db"
// função que insere as rows da tabela clientes( serve para cadastrar o cliente dentro do banco de dados)


export type Cliente = {
    nome: string
    cpf:string
    id:string
}



export const Repository_CadastrarCliente : (cliente:Cliente) => Promise<Cliente> = async (cliente : Cliente) => {
    const clienteDB : Cliente = await db.query(
        `INSERT INTO clientes (id,nome,cpf,saldo_available,saldo_waiting_founds) VALUES ('${cliente.id}', '${cliente.nome}', '${cliente.cpf}',0.0,0.0)`
    );
    console.log("cliente inserido");
    return clienteDB;
}




export const RepositoryTEST_CadastrarCliente : (cliente:Cliente) => Promise<Cliente> = async (cliente : Cliente) => {
    return cliente;
}








