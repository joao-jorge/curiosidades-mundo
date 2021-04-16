const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  author: {type: String, required: true},
  createdAt: {type: Date },
  comments: {type: String},
  reactions: {type: Array}
})

const Posts = mongoose.model("Posts", postSchema)

module.exports = Posts