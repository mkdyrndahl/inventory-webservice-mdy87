
exports.addItemMDy87 = function(req, res)   {
    res.header("Access-Control-Allow-Origin: *")

    var item = {
        sku: req.body.sku,
        name: req.body.name,
        price: req.body.price,
        quantity: 1
    }
    
    var index = 0

    // Ensure that the quantity is updated if the cartItem exists 
    const exists = (cartItem) => cartItem.sku == item.sku 

    // Check if the item exists in the cart, and if it does, update the quantity of items
    if(cart.some(exists) == true){

        // Iterate through the cart to check the index of the item, and iterate through the inventory to check for total quantity in the inventory
        totalQuantity = 0;
        global.cart.forEach(cartItem => {
        
            if(cartItem.sku == item.sku){
                index = global.cart.indexOf(cartItem);
            }
        
            global.inventory.forEach(invItem => {
                if(invItem.sku == cartItem.sku){
                    totalQuantity = invItem.quantity
                }
            })
        })

        var cartItem = global.cart[index]
        
        // Check if the totalQuantity in the inventory is larger than the quantity added to the cart
        if(totalQuantity > cartItem.quantity && totalQuantity != "OUT OF STOCK") {
            
            cartItem.quantity += item.quantity
            global.cart[index] = cartItem
        } else {
            
            console.log(cartItem.name + " is OUT OF STOCK")
        }

        res.send(JSON.stringify(global.cart))
    } else {

        global.cart.push(item)
        res.send(JSON.stringify(global.cart))
    }
}

// If the POST request is received in the checkout route, the cart is processed and the correct number of items in the inventory are removed.
exports.checkout = function(req, res)   {
    res.header("Access-Control-Allow-Origin: *")
    var total = 0;

    global.cart.forEach(cartItem => {
        total += cartItem.price

        global.inventory.forEach(invItem => {
            if(invItem.sku == cartItem.sku){
                if(invItem.quantity <= 0) {
                    invItem.quantity = invItem.quantity - cartItem.quantity
                } else {
                    invItem.quantity = "OUT OF STOCK"
                }
                inventory[invItem] = invItem
            }
        })
    })



    res.header("content-type: application/json")
    res.send(JSON.stringify(global.inventory))
}

// Get request sends cart data
exports.getCartMDy87 = function(req, res)   {
    res.send(global.cart)
}


// DELETE
// Once a DELETE request is received the cart will remove the specified item from the cart
// Might have to change this to -1 quantity at some point
exports.removeItemMDy87 = function(req, res)    {
    res.header("Access-Control-Allow-Origin: *")
    const sku = req.body.sku
    cart = global.cart.filter(item => item.sku != sku)
    res.header("content-type: application/json")
    res.send(JSON.stringify(global.cart))
}
