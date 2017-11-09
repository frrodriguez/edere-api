import StartServer from './'

import { expect } from 'chai'

import 'mocha'

import ApplicationError from '../Errors/ApplicationError'

describe('Server Basic Test', () => {

    it('Should start with no errors', () => {
        expect(async () => {
            const server = await StartServer()
            server.close()
        }).not.throw(Error)
    });

})