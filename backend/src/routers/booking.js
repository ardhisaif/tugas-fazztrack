const express = require('express')
const routers = express.Router()
const controllers = require('../controllers/booking')

routers.get('/', controllers.getData)
routers.post('/', controllers.addData)
routers.put('/:id', controllers.updateData)
routers.delete('/:id', controllers.deleletData)

module.exports = routers