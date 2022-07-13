import express, { Express } from 'express'
import { Server } from 'http'
import bodyParser from 'body-parser'
import { Routes } from '../../../interfaces/routes'
import cors from 'cors'

export class HttpServer {
    public app: Express = express()
    private readonly port: number = 3333

    constructor(){
        this.app.use(cors())
        this.app.use(bodyParser.json())
        this.app.use(
            bodyParser.urlencoded({
              extended: true
            })
          )
        this.app.use('/', ...Routes)
    }

    start = () => {
        return this.app.listen(this.port, () => {
            console.log(`Server is running on port: ${this.port}`)
        });
    }

    close = (server: Server) => {
        server.close()
        console.log('close server')
    }
}



