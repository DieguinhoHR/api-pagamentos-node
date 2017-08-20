module.exports = function(app) {
    app.get('/pagamentos', function(req, res) {
        res.send('ok.')
    })

    app.post('/pagamentos', function(req, res) {
        req.assert("forma_pagamento", "Forma de pagamento é obrigatório")
            .notEmpty()
        req.assert("valor", "Valor é obrigatório e deve ser um decimal")
            .notEmpty()
            .isFloat()

        var errors = req.validationErrors()

        if (errors) {
            res.status(500).send(errors)
            return
        }

        var pagamento = req.body

        pagamento.status = 'CRIADO'
        pagamento.data = new Date

        var connection = app.persistence.connectionFactory()
        var pagamentoDao = new app.persistence.PagamentoDao(connection)

        pagamentoDao.save(pagamento, function(error, result) {
            if (error) {
                console.log(`Erro ao inserir no banco ${error}`)
                res.status(500).send(error)
            } else {
                res.location('/pagamentos/' + result.insertId)
                res.status(201).json(pagamento) // 201 created
            }
        })
    })
}