import { Request, Response } from "express";



export function Controller_ConsultarTransacao(req:Request, res:Response){
    res.send({transacao1:'hello world'})
}