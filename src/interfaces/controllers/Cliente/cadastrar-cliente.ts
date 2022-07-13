import { Request, Response } from "express";
import { make_UseCase_CadastrarCliente } from "../../../app/use-cases/Cliente/cadastrar-cliente";
import { Cliente } from "../../../db/Cliente/cadastrar-cliente";



export async function Controller_CadastrarCliente(req:Request, res:Response){
    const cliente:Cliente = req.body

    const result = await make_UseCase_CadastrarCliente(cliente)
    res.send(result)
}