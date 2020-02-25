const {Router} = require('express')


const routes = Router()


const SessionController = require('./controllers/SessionController')

routes.post('/admin', SessionController.index)



module.exports = routes