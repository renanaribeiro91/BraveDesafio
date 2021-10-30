const express = require('express')
require('dotenv/config')
const cors = require('cors')


const app = express()

require('./database/connection')


const routes = require("./routes/mailRoutes")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(routes)



app.listen(process.env.PORT, (err) => {
    if (err) { return console.log('Error:', err); }
    console.log(`server is on PORT ${process.env.PORT}`)
})



