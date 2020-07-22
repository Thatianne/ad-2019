const nodemailer = require('nodemailer')

class Email {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        })
    }

    async send({ to, subject, text, from = process.env.EMAIL_USER }) {
        await this.transporter.sendMail({
            from,
            to,
            subject,
            text
        })
    }
}

module.exports = Email