module.exports = function(app) {
    app.get('/pagamentos', function(req, res) {
        console.log('recebida recebição de teste')
        res.send('ok.')
    })

    app.post('/pagamentos', function(req, res) {
        let pagamento = req.body

        pagamento.status = 'CRIADO'
        pagamento.data = new Date

        let connection = app.persistence.connectionFactory()
        let pagamentoDao = new app.persistence.PagamentoDao(connection)

        pagamentoDao.save(pagamento, function(error, result) {
            if (error) {
                res.send(error)
            } else {
                console.log('pagamento criado')
                res.json(pagamento)
            }
        })
    })
}