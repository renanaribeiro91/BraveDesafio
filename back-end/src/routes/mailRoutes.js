const { Router } = require('express');
const { sendMailMsg } = require("../controller/MailController")


const routes = Router();

routes.post('/send', sendMailMsg)


module.exports = routes