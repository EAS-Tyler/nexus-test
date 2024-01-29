const express = require('express')
const app = express()


function response(x, y) {
    return x + y
    }
    
app.get('/', (req, res) => {
    res.json(response(4, 3))
})

function testin() {
    return "bacon"
}

function testin() {
    return "bacon"
}




module.exports.response = response
module.exports.app = app
module.exports.testin = testin

// set up sonarcube in own vm

