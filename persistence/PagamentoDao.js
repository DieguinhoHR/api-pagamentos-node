function PagamentoDao(conneciton) {
    this._connection = conneciton
}

PagamentoDao.prototype.save = function(pagamento, callback) {
    this._connection.query('INSERT INTO pagamentos SET ?', pagamento, callback)
}

PagamentoDao.prototype.list = function(pagamento, callback) {
    this._connection.query('SELECT * FROM pagamentos', callback)
}

PagamentoDao.prototype.findById = function(id, callback) {
    this._connection.query('SELECT * FROM  pagamentos WHERE id = ?', id, pagamento)
}