//arquivo de rotas
const { Router } = require('express')
const Cadeira = require('./models/Cadeira.js')

const routes = Router()


routes.get('/pagas', async (req, res) => {
    const data = await Cadeira.find()
    return res.json(data)
})

routes.get('/pagas/:id', async (req, res) => {
    const data = await Cadeira.find({"periodo": req.params.id}, {"_id": 0})
    return res.json(data)
})

routes.post('/pagas',  async (req, res) => {
    const { nome, tipo, periodo, cargaHoraria, creditos, nota } = req.body
    const cadeira = await Cadeira.create({
        nome,
        tipo, 
        periodo,
        cargaHoraria,
        creditos,
        nota
    })

    return res.send(cadeira)
})

module.exports = routes;
