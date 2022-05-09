var mongoose = require('mongoose');
var loadJSON = require('../src/loadJSON');
var entregaSchema = require('../models/entregaSchema');
var entregadorLoginSchema = require('../models/loginEntregador');

mongoose.connect('mongodb://mongo:27017/entregas', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connected");
    const entregaModel = mongoose.model('entregaItem', entregaSchema);
    entregaModel.insertMany(loadJSON('../scripts/entregas.json')["entregas"], function(err) {
        if (err) console.log("error");
        mongoose.disconnect(function(){console.log("disconnected")});
    });
    const entregadorLoginModel = mongoose.model('entregadorLogin', entregadorLoginSchema);
    entregadorLoginModel.insertMany(loadJSON('../scripts/login.json')["login"], function(err) {
        if (err) console.log("error");
        mongoose.disconnect(function(){console.log("disconnected")});
    });

});
