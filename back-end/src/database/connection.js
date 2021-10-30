const { connect } = require('mongoose')


const options = { useNewUrlParser: true, useUnifiedTopology: true }
const mongoose = connect(process.env.URL, options, (err) => {
    if (!err) {
        console.log("connected")
    } else {
        return console.log("not connected" + err)
    }
})





module.exports = mongoose