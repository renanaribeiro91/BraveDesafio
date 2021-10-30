const { store } = require("../repository/userRepository")
const { sendMail } = require('../services/servicesMail')



module.exports = {
    async sendMailMsg(req, res) {
        try {
            const { name, email } = req.body
            await sendMail(req.body)
            await store(name, email)
            res.status(200).send()
        } catch (err) {
            res.status(500).send({
                message: "erro interno no servidor"
            })
        }

    }
}
