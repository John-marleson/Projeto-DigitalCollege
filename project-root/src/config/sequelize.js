const { sequelize } = require('sequelize')

const sequelize = new sequelize('projetoback', 'root', 'Tanzqwyw', {
    host: 'localhost',
    dialect: 'mysql',
    loggin: false
})

sequelize.authenticate()
    .then(()=> {
        sequelize.sync({alter: true})
        console.log('conexão com sucesso ao banco de dados!')
    })
    .catch((err)=>{
        console.error('não foi possivel fazer a conexão ao banco de dados')
    })


module.exports = sequelize