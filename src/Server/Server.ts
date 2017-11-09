import App from '../App'
import * as config from 'config'
import * as http from 'http'
import ApplicationError from '../Errors/ApplicationError'

const port = config.get('App.PORT')

const StartServer = async () => {
    const app = new App()

    const server = http.createServer(app.express)

    await server.listen(port, (err) => {
        if (err) {
            throw new ApplicationError(`Server cannot start ${err}`)
        }
        return console.log(`Server listening on ${port}`)
    })

    
    return server
}


export default StartServer 