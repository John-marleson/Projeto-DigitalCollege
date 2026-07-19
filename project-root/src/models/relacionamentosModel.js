const categoriasModel = require('./categoriasModel')
const imagensProdutoModel = require('./imagensProdutoModel')
const opcoesProdutoModel = require('./opcoesProdutoModel')
const produtosCategoriasModel = require('./produtosCategoriasModel')
const produtosModel = require('./produtosModel')

produtosModel.hasMany(imagensProdutoModel)
imagensProdutoModel.belongTo(produtosModel)

opcoesProdutoModel.belongTo(produtosModel)
produtosModel.hasMany(opcoesProdutoModel)

produtosModel.belongsToMany(categoriasModel, {
    through: produtosCategoriasModel,
    foreignKey: 'product_id',
    otherKey: 'category_id'
});
categoriasModel.belongsToMany(produtosModel, {
    through: produtosCategoriasModel,
    foreignKey: 'category_id',
    otherKey: 'product_id'
});

module.exports = { 
    categoriasModel,
    imagensProdutoModel,
    opcoesProdutoModel,
    produtosCategoriasModel,
    produtosModel
}