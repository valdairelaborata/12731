const res = require('express/lib/response');
var Produtos = require('../models/produto');

/*
exports.incluir = async (req, res)=>{
    
}*/

exports.incluir = (req, res) => {
    // #swagger.tags = ['Produtos']   
    // #swagger.description = 'Incluir um produto'

    Produtos.create(req.body, (erro, data) => {
        if (erro) {
            console.log('Erro a salvar o produto: ' + erro)
            res.status(500).send('Erro a salvar o produto: ' + erro)
        }
        else {
            console.log('Produto cadastrado com sucesso!!! ' + data)
            res.status(201).send('Produto cadastrado com sucesso!!!')
        }
    })
}