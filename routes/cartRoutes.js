var express = require('express')
var router = express.Router()

var cartController = require('../controllers/cartController')

router.post('/cartMDy87', cartController.addItemMDy87)
router.post('/cartMDy87/checkout', cartController.checkout)
router.get('/getCartMDy87', cartController.getCartMDy87)
router.delete('/removeItemMDy87', cartController.removeItemMDy87)

module.exports = router