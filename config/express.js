let express = require('express')
let consign = require('consign')
let bodyParser = require('body-parser')

module.exports = function() {
    let app = express()

    app.use(bodyParser.json())

    consign()
        .include('controllers')
        .then('persistence')
        .into(app)

    return app
}