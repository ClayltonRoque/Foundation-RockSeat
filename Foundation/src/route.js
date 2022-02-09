const express = require('express')

const res = require('express/lib/response')

const route = express.Router()

route.get('/', (req, res) => res.render("index"))

module.exports = route 