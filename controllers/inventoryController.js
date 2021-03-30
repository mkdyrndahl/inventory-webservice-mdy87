exports.getInventory = function(req, res) {
    res.header("content-type: application/json")
    res.header("Access-Control-Allow-Origin: *")
    res.send(JSON.stringify(global.inventory))

}







/*
// GET 
// Once a GET request is received in the inventoryMDy87 route, an updated inventory list is sent to the application.
exp.get('/inventoryMDy87', (req, res) => {
    res.header("content-type: application/json")
    res.send(inventory)
})
*/