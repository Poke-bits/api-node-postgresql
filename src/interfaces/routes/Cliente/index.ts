import { Router } from 'express'
import { Controllers } from '../../controllers';


export const RouterCliente = Router()

RouterCliente.post('/cliente/cadastrar', Controllers.Cliente.Controller_CadastrarCliente)