const express = require('express')
const app = express()
const cors = require('cors')

const conn = require('./db/conn')
const pacienteController = require('./controller/paciente.controller')
const hostname = 'localhost' //127.0.0.1
const PORT = 3000

//------------- Middleware ----------------
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

//---------------- Rotas -----------------
app.post('/paciente', pacienteController.cadastrar)
app.post('/paciente', pacienteController.listar)

app.get('/',(req,res)=>{
    res.status(200).json({mensagem: 'Aplicação rodando!'})
})

//---------------- Server -----------------
conn.sync()
.then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`Servidor rodando em http://${hostname}:${PORT}`)
    })
})
.catch((err)=>{
    console.error(`Erro de conexão com o banco de dados!`,err)
})