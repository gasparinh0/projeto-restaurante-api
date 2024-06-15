const router = require('express').Router();

const ordersController = require('../controllers/ordersController');
const productsController = require('../controllers/productsController');

//Rotas para orders
//router.get('/orders/:id?',ordersController.get)
//router.delete('/orders/:id',ordersController.remove)

//Rotas para produtos
router.get('/products/:id?',productsController.get)
router.post('/products',productsController.post)
router.put('/products/:id',productsController.put)
router.delete('/products/:id',productsController.remove)

module.exports = router