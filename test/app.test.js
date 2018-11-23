const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app')
chai.use(chaiHttp)
const expect = chai.expect

describe ('App.js', () => {

    it ('should have status 200 and send OK message', (done) => {
        chai
        .request(app)
        .get('/')
        .end((err, res) => {
            expect(res).to.have.status(200)
            expect(res.body).to.be.a('object')
            expect(res.body).to.haveOwnProperty('message')
            expect(res.body.message).to.equal('OK')
            done()
        })
    })
})