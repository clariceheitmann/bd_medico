const Paciente = require('../models/Paciente')

const cadastrar = async (req,res) => {
    const valores = req.body

    try{
        await Paciente.create(valores)
        res.status(201).json({message: "Dados do paciente cadastrados com sucesso!"})
    }catch(err){
        res.status(500).json({message: "Não foi possível cadastrar os dados do paciente"})
    }
}

const listar = async (req, res) =>{
    try{
        const pacientes = await Paciente.findAll()
        res.status(201).json(pacientes)
    }catch(err){
        res.status(500).json({message: "Não foi possível cadastrar os dados do paciente"})
    }
}

module.exports = {cadastrar, listar}