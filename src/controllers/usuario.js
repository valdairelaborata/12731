var Usuarios = require('../models/usuario');

exports.incluir = (req, res) => {
    // #swagger.tags = ['Usuário']   
    // #swagger.description = 'Incluir um usuário'

    Usuarios.create(req.body, (erro, data) => {
        if (erro) {
            console.log('Erro a salvar o usuário: ' + erro)
            res.status(500).send('Erro a salvar o usuário: ' + erro)
        }
        else {
            console.log('Usuário cadastrado com sucesso!!! ' + data)
            res.status(201).send('Usuário cadastrado com sucesso!!!')
        }
    })
}