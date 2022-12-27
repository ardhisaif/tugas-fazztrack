const controllers = {}
const models = require('../models/movie')
const response = require('../lib/response')

controllers.getData = async (req, res) => {
    try {
        const {limit} = req.query || 4
        const {page} = req.query || 1
        const filter = "name"
        console.log(filter);
        const offset = (page - 1) * 4
        const result = await models.getAll({filter, limit, offset})
        const meta = {page}
        return response(res, 200, result, meta)
    } catch (error) {
        console.log(new Error(error).message)
        return response(res, 500, error)
    }
}

controllers.getDataByName = async (req, res) => {
    try {
        const name = req.query.name
        const limit = req.query.limit || 2
        const offset = req.query.offset || 0
        console.log(name);
        const page = Number(offset) + 1
        const meta = {page}
        const result = await models.getByName({name, limit, offset})
        return response(res, 200, result, meta)
    } catch (error) {
        console.log(new Error(error).message)
        return response(res, 500, error)
    }
}

controllers.addData = async (req, res) => {
    try {
        const { name, directed_by, casts, genres , release_date , duration, synopsis, image } = req.body
        console.log(name, directed_by, casts, genres , release_date , duration, synopsis, image);
        const result = await models.addMovie({ name, directed_by, casts, genres , release_date , duration, synopsis, image })
        return response(res, 200, result)
    } catch (error) {
        console.log(new Error(error).message)
        return response(res, 500, error)
    }
}

controllers.updateData = async (req, res) => {
    try {
        const { name, directed_by, casts, genres , release_date , duration, synopsis, image } = req.body
        const id = req.params.id
        console.log(id);
        const result = await models.updateMovie({ name, directed_by, casts, genres , release_date , duration, synopsis, image, id })
        return response(res, 200, result)
    } catch (error) {
        console.log(new Error(error).message)
        return response(res, 500, error)
    }
}

controllers.deleletData = async (req, res) => {
    try {
        const {id} = req.params
        const result = await models.deleteMovie({ id })
        return response(res, 200, result)
    } catch (error) {
        console.log(new Error(error).message)
        return response(res, 500, error)
    }
}

module.exports = controllers
