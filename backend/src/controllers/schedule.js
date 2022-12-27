const controllers = {}
const models = require('../models/schedule')
const response = require('../lib/response')

controllers.getData = async (req, res) => {
    try {
        const result = await models.getAll()
        return response(res, 200, result)
    } catch (error) {
        console.log(new Error(error).message)
        return response(res, 500, error)
    }
}

controllers.addData = async (req, res) => {
    try {
        const {movie_id, price, premiere, location, date_start, date_end, time} = req.body
        const result = await models.addSchedule({movie_id, price, premiere, location, date_start, date_end, time})
        return response(res, 200, result)
    } catch (error) {
        console.log(new Error(error).message)
        return response(res, 500, error)
    }
}

controllers.updateData = async (req, res) => {
    try {
        const {movie_id, price, premiere, location, date_start, date_end, time} = req.body
        const id = req.params.id
        console.log(id);
        const result = await models.updateSchedule({movie_id, price, premiere, location, date_start, date_end, time, id})
        return response(res, 200, result)
    } catch (error) {
        console.log(new Error(error).message)
        return response(res, 500, error)
    }
}

controllers.deleletData = async (req, res) => {
    try {
        const {id} = req.params
        const result = await models.deleteSchedule({ id })
        return response(res, 200, result)
    } catch (error) {
        console.log(new Error(error).message)
        return response(res, 500, error)
    }
}

module.exports = controllers
