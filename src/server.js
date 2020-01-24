const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const rotas = require('./rotas.js')

const app = express()

mongoose.connect('mongodb+srv://carol:carol123@cluster0-i4inp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(rotas)


app.listen(3003)