const assert = require('assert')
const noQuestion = require('../helpers/noQuestion')
const noSpace = require('../helpers/noSpace')
const validateWord = require('../helpers/validateWord')

describe('All Helpers Helpers', () => {

    it('No Space | should give false status if no space', (done)=> {
        let input = 'data'
        let result = noSpace(input)  
        assert.equal(result, false)
        done()
    })

    it('Validate word | should give + sign between words', (done)=> {
        let input = 'data baru'
        let result = validateWord(input)

        assert.equal(result, 'data+baru')
        done()
    })

    it('Validate word | should give the same exact word', (done)=> {
        let input = 'data'
        let result = validateWord(input)

        assert.equal(result, 'data')
        done()
    })

    it('No question | should give status true if there\'s any word what', (done)=> {
        let question = 'what is car'
        let result = noQuestion(question)

        assert.equal(result, true)
        done()
    })

    it('No question | should give status true if there\'s any word why', (done)=> {
        let question = 'why is car'
        let result = noQuestion(question)

        assert.equal(result, true)
        done()
    })

    it('No question | should give status true if there\'s any word when', (done)=> {
        let question = 'when will you go'
        let result = noQuestion(question)

        assert.equal(result, true)
        done()
    })

    it('No question | should give status true if there\'s any word who', (done)=> {
        let question = 'who are you'
        let result = noQuestion(question)

        assert.equal(result, true)
        done()
    })

    it('No question | should give status true if there\'s any word how', (done)=> {
        let question = 'how is car'
        let result = noQuestion(question)

        assert.equal(result, true)
        done()
    })

    it('No question | should give status true if there\'s any word where', (done)=> {
        let question = 'where are you'
        let result = noQuestion(question)

        assert.equal(result, true)
        done()
    })

    it('No question | should give status false if there\'s not any question', (done)=> {
        let question = 'hi'
        let result = noQuestion(question)

        assert.equal(result, false)
        done()
    })
})