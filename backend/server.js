const { app } = require("./app")
const port = 4000


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    next()
})


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})