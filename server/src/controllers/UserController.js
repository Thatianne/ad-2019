const User = require('../models/User')

const BadRequest = require('./../error/types/BadRequest')
const { OK_CODE, CREATED_CODE, NO_CONTENT_CODE } = require('./../error/constants')

const methods = {
    index(req, res) { // listar
        User.find()
        .then(users => {
            return res.status(OK_CODE)
                    .json(users)
        }).catch(err => {
            next(new BadRequest(err.errmsg))
        })
    },
    store(req, res, next) { // cadastrar
        const { name, email } = req.body

        user = User.create({
            name,
            email,
            friend: null
        }).then(user => {
            res.status(CREATED_CODE)
            return res.json(user)
        }).catch(err => {
            next(new BadRequest(err.errmsg))
        })
    },
    update(req, res, next) { // atualizar
        const id = req.params.id
        const { name, email } = req.body

        User.findByIdAndUpdate(id, {
            name,
            email,
            friend: null
        }).then(result => {
            return res.status(NO_CONTENT_CODE)
                    .send()
        }).catch(err => {
            next(new BadRequest(err.errmsg))
        })
    },
    delete(req, res) { // deletar
        const id = req.params.id
        User.deleteOne({_id: id})
        .then(result => {
            return res.status(NO_CONTENT_CODE)
                    .send()
        }).catch(err => {
            next(new BadRequest(err.errmsg))
        })
    }
}

module.exports = methods