const routerCategories = require('express').Router()
const categoriesControllers = require('../controllers/categoriesControllers')

routerCategories.get('/main', categoriesControllers.getMainCreateCategries)
routerCategories.get('/sub', categoriesControllers.getSubCreateCategries)
routerCategories.post('/specificSub', categoriesControllers.getspecificSubCreateCategries)


module.exports = routerCategories