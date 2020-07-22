const { Router } = require('express')
const UserController = require('./controllers/UserController')
const AppController = require('./controllers/AppController')

const routes = Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)
routes.post('/raffle', AppController.raffle)
routes.post('/try', AppController.try)

module.exports = routes