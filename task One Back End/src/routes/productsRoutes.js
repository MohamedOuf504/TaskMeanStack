const productsRoute = require('express').Router()
const productsController = require('../controllers/productsController')
productsRoute.get('/' ,productsController.getAllproducts )

productsRoute.post('/' ,productsController.filterproducts )

module.exports = productsRoute