var express = require('express')
var router = express.Router()

var inventoryController = require('../controllers/InventoryController')

router.post('/inventoryMDy87', inventoryController.getInventory)

module.exports = router