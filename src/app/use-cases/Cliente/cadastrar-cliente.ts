import {  Repository_CadastrarCliente } from "../../../db/Cliente/cadastrar-cliente"

type Cliente = {
    nome: string
    cpf:string
    id:string
}

export async function UseCase_CadastrarCliente(
    cliente: Cliente,
    cadastrarClienteRepository: (cliente: Cliente) => Promise<Cliente>
) {
    try{
        await cadastrarClienteRepository(cliente)
    }catch(e){
        console.error(e)
        throw e
    }
}



export async function make_UseCase_CadastrarCliente(cliente:Cliente){
    UseCase_CadastrarCliente(cliente, Repository_CadastrarCliente)
}

