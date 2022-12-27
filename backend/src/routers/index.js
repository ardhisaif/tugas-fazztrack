const express = require('express')
const routers = express.Router()

const movie = require('./movie')
const schedule = require('./schedule')
const booking = require('./booking')

routers.get("/", (req, res) => {
    res.send("masuk")
})

routers.use("/movie", movie)
routers.use("/schedule", schedule)
routers.use("/booking", booking)

module.exports = routers
