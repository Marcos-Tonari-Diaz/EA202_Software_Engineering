var mongoose = require("mongoose");

var entregaSchema = new mongoose.Schema({
    "numero_da_entrega": Number,
    "pratos": [{name: String, quantity: Number}],
    "endereco": String,
    "nome_cliente": String,
    "nome_entregador": String,
    "status": String,
});

module.exports = entregaSchema;