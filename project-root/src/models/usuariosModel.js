const sequelize = require('../config/sequelize')
const { DataTypes } = require('sequelize')

const usuarios = sequelize.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    sobrenome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    }
},
{
    tableName: 'usuarios',
    timestamp: true
})

module.exports = usuarios;