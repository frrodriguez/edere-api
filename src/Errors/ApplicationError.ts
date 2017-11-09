
export default class ApplicationError extends Error {
    constructor ( private msg : string = "Error desconocido", private errorCode : number = 500, private errorType : string = "ApplicationError") {
        super(msg)
    }
}