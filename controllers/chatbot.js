'use strict'

process.env["NTBA_FIX_319"] = 1;
const Telegram = require('node-telegram-bot-api')
const axios = require('axios')
const token = process.env.TELEGRAM_TOKEN;
const bot = new Telegram(token, { polling: true });
const noQuestion = require('../helpers/noQuestion')
const validateWord = require('../helpers/validateWord')

module.exports = function chatBot () {
    bot.on('message', (msg) => {
        const chatId = msg.chat.id;
        var message = msg.text.toString();
        
        if(message === '/start' || message.length === 0) {
            bot.sendMessage(chatId, 'Hi! please send me the word you want to know');    
        } else {
            let validateMessage = validateWord(message)
            let checkNoQuestion = noQuestion(message)

            if (!checkNoQuestion) {
                axios({
                    url: `https://glosbe.com/gapi/translate?from=eng&dest=eng&format=json&phrase=${validateMessage}&pretty=true`
                })
                    .then(({data}) => {
                        let initialData = data.tuc
                        if(initialData && initialData.length > 0) {
                            let initialDefinition = {}
                            let responses = ''
                            if(initialData[0].meanings) {
                                initialDefinition = initialData[0].meanings[0] 
                            } else {
                                initialDefinition = initialData[1].meanings[0]
                            }

                            responses = `According to Glosbe API, ${message} can be defined as ${initialDefinition.text}.`
                            bot.sendMessage(chatId, responses)
                        } else {
                            bot.sendMessage(chatId, 'I am sorry, the word you search is not found');
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
            } else { 
                bot.sendMessage(chatId, `
                    I am sorry, I can\'t accept complex question
                    \nPlease download LeksaBot app on GooglePlay for full feature
                `);
            }
        }    
    });
}