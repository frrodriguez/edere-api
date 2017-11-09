import * as express from 'express'

class App {
    
    public express

    constructor () {
        this.express = express()
        this.setMiddlewares()
        this.setRoutes()
    }

    private setMiddlewares(): void {
    }

    private setRoutes (): void {
        const router = express.Router()

        this.express.use('/', router)
    }
}

export default App