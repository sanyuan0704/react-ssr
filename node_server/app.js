const express = require("express")
const app = express()

app.use(express.static('public'))

app.listen(4000, () => {console.log('running 4000')})