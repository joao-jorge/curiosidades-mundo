const express = require('express')
const router = express.Router()
const Mailist = require('../models/mailist')

// Listar todos os emails
router.route('/').get( async (req, res)=> {
  await Mailist
      .find()
      .then(post => res.json(post))
      .catch(error => res.status(400).json(`Erro: ${error}`))
})

// Eliminar email
router.route('/delete/:id').delete( async (req, res) => {
  const { id } = req.params
  await Mailist
    .deleteOne({ _id: id })
    .then( (post) => {
      if(post.n === 0){
        res.status(400).json({ warning: 'Email inexistente'})
      } else {
        res.status(200).json({ warning: 'Email eliminado'})
      }})
    .catch( (err) => res.status(400).json({ error: 'Erro: ' + err }))
})

// Mostrar um email
router.route('/show/:id').get(async (req, res) => {
  const { id } = req.params
  await Mailist
    .findById({_id: id})
    .then( (post) => {
      if(post === null){
        res.status(400).json({ warning: 'Email inexistente'})
      } else { res.status(200).json(accounts) }})
    .catch( (err) => res.status(400).json({ error: 'Erro: ' + err }))
})

// Criar um post
router.route('/add').post( async (req, res) => {
  const { email } = req.body
  const create = new Mailist({ email })
  await create
    .save()
    .then( () => res.status(200).json('Email Criado'))
    .catch( (err) => res.status(400).json({error: 'Erro: ' + err }))
})


module.exports = router