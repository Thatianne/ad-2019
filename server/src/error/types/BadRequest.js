const { BAD_REQUEST_CODE } = require('./../constants')

class BadRequest extends Error {
    constructor(message) {
        super()
        this.statusCode = BAD_REQUEST_CODE
        this.message = message
    }
}

module.exports = BadRequest