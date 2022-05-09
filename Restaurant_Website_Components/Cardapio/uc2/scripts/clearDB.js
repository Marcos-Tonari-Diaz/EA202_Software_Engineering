var mongoose = require('mongoose');
var foodItemsSchema = require('../models/foodItemsSchema');
var pedidoSchema = require('../models/pedidoSchema');

mongoose.connect('mongodb://mongo:27017/foodItemsDB', {useNewUrlParser: true});

const foodItemModel = mongoose.model('foodItem', foodItemsSchema);
foodItemModel.collection.drop(function (){
    mongoose.disconnect(function(){
        //console.log("disconnected")
    });
});

const pedidoItemModel = mongoose.model('pedidoitems', pedidoSchema);
pedidoItemModel.collection.drop(function (){
    mongoose.disconnect(function(){
        //console.log("disconnected")
    });
});