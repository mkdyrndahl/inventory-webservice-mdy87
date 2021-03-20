const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const exp = express()
const port = 8000
const corsOptions = {
    origin : "*"
}

let inventory = [
    {
        "sku": "59779-642",
        "name": "Napkin - Beverage 1 Ply",
        "price": 37.99,
        "quantity": 9
    }, {
        "sku": "76237-199",
        "name": "Sproutsmustard Cress",
        "price": 35.99,
        "quantity": 8
    }, {
        "sku": "0519-6399",
        "name": "Wine - White, Mosel Gold",
        "price": 11.99,
        "quantity": 5
    }, {
        "sku": "37808-450",
        "name": "Octopus - Baby, Cleaned",
        "price": 2.99,
        "quantity": 9
    }, {
        "sku": "29860-217",
        "name": "Cake - Mini Cheesecake",
        "price": 2.99,
        "quantity": 8
    }, {
        "sku": "63481-553",
        "name": "Coffee Guatemala Dark",
        "price": 48.99,
        "quantity": 5
    }, {
        "sku": "57881-334",
        "name": "Sugar - Crumb",
        "price": 34.99,
        "quantity": 6
    }, {
        "sku": "67938-0993",
        "name": "Fish - Halibut, Cold Smoked",
        "price": 17.99,
        "quantity": 9
    }, {
        "sku": "52125-038",
        "name": "Muffin Batt - Ban Dream Zero",
        "price": 2.99,
        "quantity": 14
    }, {
        "sku": "65862-290",
        "name": "Juice - Propel Sport",
        "price": 5.99,
        "quantity": 17
    }
]

let cart = [
    
]

// The webservice handles all HTTP requests through the express framework. 

// POST
// Once a POST request is received within the cartMDy87 route, 
exp.post('/cartMDy87', (req,res) => {
    // Ensure that the quantity is updated if the cartItem exists 
    const exists = (cartItem) => cartItem.sku == req.body.sku 
    if(cart.some(exists)){
        cart.cartItem.quantity++
        res.send(cart.cartItem)
    } else {
        var item = {
            sku: req.body.sku,
            name: req.body.name,
            price: req.body.price,
            quantity: 1
        }
        cart.push(item)
        res.send(item)
    }
})

// If the POST request is received in the checkout route, the cart is processed and the correct number of items in the inventory are removed.
exp.post('/cartMDy87/checkout', (req, res) => {
    cart.foreach(cartItem => {
        inventory.foreach(invItem => {
            if(invItem.sku == cartItem.sku){
                invItem.quantity = inveItem.quantity - cartItem.quantity
            }
        })
    })
})

// GET 
// Once a GET request is received in the inventoryMDy87 route, an updated inventory list is sent to the application.
exp.get('/inventoryMDy87', (req, res) => {
    res.send(inventory)
})

exp.get('/cartMDy87', (req, res) => {
    res.send(cart)
})

// DELETE
// Once a DELETE request is received the cart will remove the specified item from the cart
// Might have to change this to -1 quantity at some point
exp.delete('/CartMDy87', (req, res) => {
    const sku = req.params.sku
    cart = cart.filter(item => item.sku != sku)
    res.send(cart)
})

exp.listen(port, () => {
    console.log(`Web service now listening on port ${port}`)
})