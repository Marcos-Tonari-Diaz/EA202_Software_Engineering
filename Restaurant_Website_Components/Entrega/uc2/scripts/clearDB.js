var mongoose = require('mongoose');
var entregaSchema = require('../models/entregaSchema');

mongoose.connect('mongodb://mongo:27017/entregas', {useNewUrlParser: true});

const entregaModel = mongoose.model('entregaItem', entregaSchema);
entregaModel.collection.drop(function (){
    mongoose.disconnect(function(){
        console.log("disconnected")
    });
});