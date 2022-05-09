var mongoose = require("mongoose");

var entregadorLoginSchema = new mongoose.Schema({
    "nome_entregador": String,
});

module.exports = entregadorLoginSchema;