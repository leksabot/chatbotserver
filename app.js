'use strict'

require('dotenv').config()
process.env["NTBA_FIX_319"] = 1;
const express = require('express')
const app = express()
const chatBot = require('./controllers/chatbot')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/', (req,res) => {
    console.log('OK Testing')
})

// run chat bot
chatBot()

app.listen(process.env.PORT || 3000, () => {
    console.log('Listening to PORT ', process.env.PORT)
})