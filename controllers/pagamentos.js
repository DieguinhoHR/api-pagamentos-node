module.exports = function(app) {
    app.get('/pagamentos', function(req, res) {
        console.log('recebida recebição de teste')
        res.send('ok.')
    })
}