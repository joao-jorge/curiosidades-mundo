const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mailListSchema = new Schema({
  email: {type: String, required: true}
})

const Mailist = mongoose.model("Mailist", mailListSchema)

module.exports = Mailist