const express = require('express')
const Router = express.Router()
const cors = require('cors')
const mongoose = require('mongoose')


// ficheiro de configuração
require("dotenv").config();
const port = process.env.PORT;
const uri = process.env.URI


// Base de dados mongo
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
const connection = mongoose.connection
connection.once('open', () => {
  console.log('Conectado a BD com sucesso!')
})

// inicializar a aplicação
const app = express()
app.use(express.json())
app.use(cors())

// Rotas 
const postRoutes = require('./src/routes/posts')

  // Usar as rotas
  app.use('/posts', postRoutes)

app.listen(`${port}`, () => {
  console.log(`Aplicação rodando na porta ${port}`)
})