//CRIAR UM CONTROLADOR PRAS FUNÇOES DAS ROTAS

const { Router } = require('express')
const Cadeira = require('./models/Cadeira')

const routes = Router()

routes.get('/pagas', async (req, res) => {
    const data = await Cadeira.find()
    return res.json(data)
})

routes.get('/pagas/periodo', async (req, res) => {
    if (await Cadeira.find({"periodo": req.query.periodo}).countDocuments() > 0){
        const data = await Cadeira.find({"periodo": req.query.periodo}, {"_id": 0})
        return res.json(data)
    }

    else res.send(`Nenhuma cadeira do ${req.query.periodo}º período encontrada.`)
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


module.exports = routes