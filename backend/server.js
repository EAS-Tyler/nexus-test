const { app } = require("./app")
const port = 4000


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next()
})


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})