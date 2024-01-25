const express = require('express')
const app = express()
const port = 4000

app.use(express.json())
// cross origin? headers? allow methods?

app.get('/', (req, res) => {
    res.send('nice1')
})

// app.post('/', (req, res) => {
//     res.send(`your ${req.body.thing1} is crazy ${req.body.thing2}`)
// }
// )

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})