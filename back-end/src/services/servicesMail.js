const nodemailer = require('nodemailer')

module.exports = {

    async sendMail({ name, email}) {
        const transport = await nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "7a3b988a44b230",
                pass: "101bffbf92eec0"
            }
        });

        const mail = {
            from: "desafio@brave.com",
            to: email,
            subject: `Candidatura${name} - return message`,
            text: `Prezado ${name} . \n\nVocê recebeu seu SIM\n\n`,
            html: `Prezado ${name} . <br><br>Você recebeu seu SIM<br><br>`
        };

        transport.sendMail(mail)
        
    }


}

