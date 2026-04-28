const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Paciente = db.define('paciente',{
    codPaciente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    peso: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    altura: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
},{
    timestamps: false
})

module.exports = Paciente