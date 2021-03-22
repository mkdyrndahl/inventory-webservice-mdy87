const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const e = require('express')


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

exp.use(bodyParser.json())
// The webservice handles all HTTP requests through the express framework. 

const cartRouter = require('./routes/cartRoutes')
const inventoryRouter = require('./routes/inventoryRoutes')

exp.use('/inventoryMDy87', inventoryRouter)
exp.use('/cartMDy87', cartRouter)

exp.listen(port, () => {
    console.log(`Web service now listening on port ${port}`)
})

// // POST
// // Once a POST request is received within the cartMDy87 route, the items are added to the cart 
// exp.post('/cartMDy87', (req,res) => {
//     var item = {
//         sku: req.body.sku,
//         name: req.body.name,
//         price: req.body.price,
//         quantity: 1
//     }
//     var index = 0

//     // Ensure that the quantity is updated if the cartItem exists 
//     const exists = (cartItem) => cartItem.sku == item.sku 

//     // Check if the item exists in the cart, and if it does, update the quantity of items
//     if(cart.some(exists) == true){

//         // Iterate through the cart to check the index of the item, and iterate through the inventory to check for total quantity in the inventory
//         totalQuantity = 0;
//         cart.forEach(cartItem => {
        
//             if(cartItem.sku == item.sku){
//                 index = cart.indexOf(cartItem);
//             }
        
//             inventory.forEach(invItem => {
//                 if(invItem.sku == cartItem.sku){
//                     totalQuantity = invItem.quantity
//                 }
//             })
//         })

//         var cartItem = cart[index]
        
//         // Check if the totalQuantity in the inventory is larger than the quantity added to the cart
//         if(totalQuantity > cartItem.quantity && totalQuantity != "OUT OF STOCK") {
            
//             cartItem.quantity += item.quantity
//             cart[index] = cartItem
//         } else {
            
//             console.log(cartItem.name + " is OUT OF STOCK")
//         }

//         res.send(cart)
//     } else {

//         cart.push(item)
//         res.send(cart)
//     }
// })

// // If the POST request is received in the checkout route, the cart is processed and the correct number of items in the inventory are removed.
// exp.post('/cartMDy87/checkout', (req, res) => {
//     cart.forEach(cartItem => {
//         inventory.forEach(invItem => {
//             if(invItem.sku == cartItem.sku){
//                 if(invItem.quantity <= 0) {
//                     invItem.quantity = invItem.quantity - cartItem.quantity
//                 } else {
//                     invItem.quantity = "OUT OF STOCK"
//                 }
//                 inventory[invItem] = invItem
//             }
//         })
//     })
//     res.header("content-type: application/json")
//     res.send(inventory)
// })

// // GET 
// // Once a GET request is received in the inventoryMDy87 route, an updated inventory list is sent to the application.
// exp.get('/inventoryMDy87', (req, res) => {
//     res.header("content-type: application/json")
//     res.send(inventory)
// })
// // Get request sends cart data
// exp.get('/cartMDy87', (req, res) => {
//     res.header("content-type: application/json")
//     res.send(cart)
// })

// // DELETE
// // Once a DELETE request is received the cart will remove the specified item from the cart
// // Might have to change this to -1 quantity at some point
// exp.delete('/cartMDy87', (req, res) => {
//     const sku = req.body.sku
//     cart = cart.filter(item => item.sku != sku)
//     res.header("content-type: application/json")
//     res.send(cart)
// })