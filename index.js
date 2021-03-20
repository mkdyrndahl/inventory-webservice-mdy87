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
exp.post('/cartMDy87', (req,res) => {

})

exp.post('/cartMDy87/checkout', (req, res) => {

})

// GET 
exp.get('/inventoryMDy87', (req, res) => {

})

exp.get('/cartMDy87', (req, res) => {

})

// DELETE
exp.delete('/CartMDy87', (req, res) => {
