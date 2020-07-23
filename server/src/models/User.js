const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true, trim: true, maxlength: 50 },
  email: { type: String, required: true, trim: true, maxlength: 50},
  friend: String
})

module.exports = mongoose.model('User', userSchema)