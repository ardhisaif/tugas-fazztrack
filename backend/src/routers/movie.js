const express = require('express')
const routers = express.Router()
const controllers = require('../controllers/movie')

routers.get('/', controllers.getData)
routers.get('/search', controllers.getDataByName)
// routers.get('/sort', controllers.getDataByName)
routers.post('/', controllers.addData)
routers.put('/:id', controllers.updateData)
routers.delete('/:id', controllers.deleletData)

module.exports = routers