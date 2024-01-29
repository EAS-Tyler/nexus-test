const express = require('express')
const app = express()


function response(x, y) {
    return x + y
    }
    
app.get('/', (req, res) => {
    res.json(response(4, 3))
})

app._router.(()) = function

module.exports.response = response
module.exports.app = app


// set up sonarcube in own vm

