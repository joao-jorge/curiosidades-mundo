const express = require('express')
const router = express.Router()
const Post = require('../models/posts')

// Listar todos os posts
router.route('/').get( async (req, res)=> {
  const {page = 1} = req.query 
  await Post
      .paginate({}, {page, limit: 2})
      .then(post => res.json(post))
      .catch(error => res.status(400).json(`Erro: ${error}`))
})

// Criar um post
router.route('/add').post( async (req, res) => {
  const date = new Date()
  const { title, content, author, tag} = req.body
  const create = new Post({ title, content, author, tag, createdAt: new Date()})
  await create
    .save()
    .then( () => res.status(200).json('Post Criado'))
    .catch( (err) => res.status(400).json({error: 'Erro: ' + err }))
})

//Editar um post
router.route('/update/:id').put( async (req, res) => {
  const { id } = req.params
  const { title, content, author, tag } = req.body
  await Post
    .updateOne({_id: id}, {
      $set: {
        title,
        content,
        author,
        tag
      }
    })
    .then( (post) => {
      if(post.nModified === 0){
        res.status(400).json({aviso: 'Nada foi modificado'})
      } else { res.status(200).json({res: 'Dados modificados'}) }
    })
    .catch( (err) => res.status(400).json({error: 'Erro: ' + err }))
})

// Eliminar post
router.route('/delete/:id').delete( async (req, res) => {
  const { id } = req.params
  await Post
    .deleteOne({ _id: id })
    .then( (post) => {
      if(post.n === 0){
        res.status(400).json({ warning: 'Post inexistente'})
      } else {
        res.status(200).json({ warning: 'Post eliminado'})
      }})
    .catch( (err) => res.status(400).json({ error: 'Erro: ' + err }))
})

// Mostrar um post
router.route('/show/:id').get(async (req, res) => {
  const { id } = req.params
  await Post
    .findById({_id: id})
    .then( (post) => {
      if(post === null){
        res.status(400).json({ warning: 'Post inexistente'})
      } else { res.status(200).json(accounts) }})
    .catch( (err) => res.status(400).json({ error: 'Erro: ' + err }))
})


module.exports = router