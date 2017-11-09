
import ApplicationError from './ApplicationError'

export default class NotFoundError extends ApplicationError {
    constructor ( msg : string) {
        super(msg, 404, "NotFoundError")
    }
}
