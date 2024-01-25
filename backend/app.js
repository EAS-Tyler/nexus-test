const express = require('express')
const app = express()


function response(x, y) {
    return x + y
    }
    
app.get('/', (req, res) => {
    res.json(response(4, 3))
})


module.exports = response
module.exports = app


// set up sonarcube in own vm

