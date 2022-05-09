var mongoose = require("mongoose");

var pedidoSchema = new mongoose.Schema({
    "cliente": String,
    "pratos": [{name: String, quantity: Number, price: Number}],
});

module.exports = pedidoSchema;
