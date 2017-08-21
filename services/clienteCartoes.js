var restify = require('restify-clients');


var cliente = restify.createJsonClient({
    url: 'http://localhost:3001',

})

cliente.post('/cartoes/autoriza', function(error, req, res, returnCards) {
    console.log('consumindo servico de cartoes')
    console.log(returnCards)
})