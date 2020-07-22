const mailgun = require('mailgun-js')

class EmailV2 {
    constructor() {
        this.api = mailgun({
            apiKey: process.env.MAILGUN_API_KEY,
            domain: process.env.MAILGUN_DOMAIN
        })
    }

    async send({ to, subject, text, from }) {
        await this.api.messages()
        .send({
            from,
            to,
            subject,
            text
        })
    }
}

module.exports = EmailV2