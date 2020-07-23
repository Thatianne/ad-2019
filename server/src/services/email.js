const sgMail = require('@sendgrid/mail');

class Email {
    constructor() {
        this.sgMail = sgMail
        this.sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    }

    async send({ to, subject, text }) {
        const msg = {
            from: process.env.SENDGRID_SENDER,
            to,
            subject,
            text
        };

        await this.sgMail.send(msg);
    }
}

module.exports = Email