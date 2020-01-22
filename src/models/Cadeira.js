const mongoose = require('mongoose')

const CadeiraSchema = new mongoose.Schema({
    nome: String,
    tipo: String,
    periodo: Number,
    cargaHoraria: Number,
    creditos: Number,
    nota: Number
})

module.exports = mongoose.model('Cadeira', CadeiraSchema)