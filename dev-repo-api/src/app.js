import express, { Router, router } from 'express'
import cors from 'cors'

class App {
  constructor() {
    this.server = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.server.use(express.json()) //informa que o express irá trabalhar com json
    this.server.use(cors())
  }

  routes() {
    const routes = new Router()

    routes.get('/hello', (req, res) => {
      res.json({ hello: 'world' })
    })

    this.server.use(routes)
  }
}

export default new App().server