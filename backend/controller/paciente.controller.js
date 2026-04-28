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
    console.log('listar')
    try{
        const pacientes = await Paciente.findAll()
        console.log(pacientes)
        res.status(201).json(pacientes)
    }catch(err){
        res.status(500).json({message: "Não foi possível cadastrar os dados do paciente"})
    }
}

const consultar = async (req,res) => {
    const id = req.params.id
    console.log(id)
    try{
        const dado = await Paciente.findOne({where: {codPaciente: id}})
        if(!dado){
            res.status(404).json({message: 'Paciente não encontrado!'})
        }else{
            res.status(200).json(dado)
        }
    }catch(err){
        res.status(500).json({message: 'Erro ao consultar o pacoente!'})
        console.error('Erro ao consultar o paciente!',err)
    }
}

const apagar = async(req,res) =>{
    const id = req.params.id
    console.log(id)
    try{
        const dado = await Paciente.findOne({where: {codPaciente: id}})
        if(!dado){
            res.status(404).json({message: 'Paciente não encontrado!'})
        }else{
            await Paciente.destroy({where: {codPaciente: id}})
            //await Paciente.destroy(dado)
            res.status(200).json({message: 'Paciente excluído com sucesso!'})
        }
    }catch(err){
        res.status(500).json({message: 'Erro ao consultar o pacoente!'})
        console.error('Erro ao consultar o paciente!',err)
    }

}

module.exports = {cadastrar, listar, consultar, apagar}