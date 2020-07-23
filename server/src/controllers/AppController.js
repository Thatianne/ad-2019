const User = require('./../models/User')
const Email = require('./../services/email')
const EmailV2 = require('./../services/emailV2')
const generateRandom = require('./../helpers/generateRandom')
const { OK_CODE } = require('./../error/constants')

const methods = {
    raffle(req, res, next) {
        const emailTemplate = {
            subject: "Resultado do sorteio",
            text: "Oii {{user}}, você tirou {{friend}} no sorteio! :)"
        }

        User.find()
        .then(users => {
            const sender = new Email()
            const amount = users.length
            const usersToFriend = []

            if (users.length < 2) {
                return next(new Error('Não é possível sortear com apenas um ou nenhum participante'))
            }

            users.forEach((user, index) => {
                const number = generateRandom(0, amount - 1, usersToFriend.concat([index]))
                usersToFriend.push(number)
                const friend =  users[number].name

                sender.send({
                    to: user.email,
                    subject: emailTemplate.subject,
                    text: emailTemplate.text
                        .replace('{{user}}', user.name)
                        .replace('{{friend}}', friend)
                })
                .then(result => {
                    user.updateOne({
                        friend
                    })
                    .then(result => {
                        res.status(OK_CODE)
                        return res.send()
                    })
                    .catch(err => next(err))
                })
                .catch(err => next(err))
            })
        })
    },

    try(req, res, next) {
        console.log('try')
        const sender = new EmailV2()
        sender.send({
            from: 'Thatianne <me@samples.mailgun.org>',
            to: 'thatianne.cristina@hotmail.com',
            subject: 'Teste abc',
            text: 'Um texto qualquer'
        })
        .then(result => {
            console.log(result)
            res.status(OK_CODE)
            return res.send()
        })
        .catch(err => console.log(err))
    }
}

module.exports = methods