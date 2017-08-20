module.exports = function(app) {
    app.get('/pagamentos', function(req, res) {
        console.log('recebida recebição de teste')
        res.send('ok.')
    })

    app.post('/pagamentos', function(req, res) {
        let pagamento = req.body

        pagamento.status = 'CRIADO'
        pagamento.data = new Date

        res.send(pagamento)
    })
}