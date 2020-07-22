const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  email: { type: String, required: true },
  friend: String
})

module.exports = mongoose.model('User', userSchema)