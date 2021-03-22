const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 8000

const corsOptions = {
    origin : "*"
}


app.use(bodyParser.json())
// The webservice handles all HTTP requests through the express framework. 

const cartRouter = require('./routes/cartRoutes')
const inventoryRouter = require('./routes/inventoryRoutes')

app.use('/', inventoryRouter)
app.use('/', cartRouter)

app.listen(port, () => {
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