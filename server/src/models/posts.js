const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const Schema = mongoose.Schema

const postSchema = new Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  author: {type: String, required: true},
  tag: {type: String, required: true},
  createdAt: {type: Date },
  comments: {type: String},
  reactions: {type: Array}
})

postSchema.plugin(mongoosePaginate)
const Posts = mongoose.model("Posts", postSchema)

module.exports = Posts