const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true, trim: true, maxlength: 30 },
  email: { type: String, required: true, trim: true, maxlength: 30},
  friend: String
})

module.exports = mongoose.model('User', userSchema)