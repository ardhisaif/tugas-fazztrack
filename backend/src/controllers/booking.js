const controllers = {}
const models = require('../models/booking')
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
        const {schedule_id, username, paid, ticket_used, qr_code} = req.body
        const result = await models.addBooking({schedule_id, username, paid, ticket_used, qr_code})
        return response(res, 200, result)
    } catch (error) {
        console.log(new Error(error).message)
        return response(res, 500, error)
    }
}

controllers.updateData = async (req, res) => {
    try {
        const {schedule_id, username, paid, ticket_used, qr_code} = req.body
        const id = req.params.id
        console.log(id);
        const result = await models.updateBooking({schedule_id, username, paid, ticket_used, qr_code, id})
        return response(res, 200, result)
    } catch (error) {
        console.log(new Error(error).message)
        return response(res, 500, error)
    }
}

controllers.deleletData = async (req, res) => {
    try {
        const {id} = req.params
        const result = await models.deleteBooking({ id })
        return response(res, 200, result)
    } catch (error) {
        console.log(new Error(error).message)
        return response(res, 500, error)
    }
}

module.exports = controllers
