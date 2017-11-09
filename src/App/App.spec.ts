import App from './'

import { expect } from 'chai'

import 'mocha'

describe('App Basic Test', () => {

    it('Should mount with no errors', () => {
        expect(new App().express).not.to.be.undefined
    });

})