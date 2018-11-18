'use strict'

const noSpace = require('./noSpace')

function validateWord(input){

    if(noSpace(input)){
        let word = ''
        let wordArr = input.split(' ')
        wordArr.forEach((individualword,index) => {
           if(index === 0){
             word = individualword
           } else {
             word = word + '+' + individualword 
           }
        });
        return word
    } else {
        return input
    }
} 

// console.log(validateWord('air'))
// console.log(validateWord('air conditioner'))
// console.log(validateWord('air conditioner system'))

module.exports = validateWord