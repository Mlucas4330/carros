const { index, view, create, update, destroy } = require('../controllers/carrosController')

const Router = require('express').Router

const carrosRouter = Router()

carrosRouter.get('/carros', index)
carrosRouter.get('/carros/:id', view)
carrosRouter.post('/carros', create)
carrosRouter.put('/carros/:id', update)
carrosRouter.delete('/carros/:id', destroy)

module.exports = carrosRouter