const userModel = require('../models/userModel')



module.exports = {

    async store(name, email) {
        const user = {name,email}
        await userModel.create(user)
    },

}
