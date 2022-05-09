var mongoose = require('mongoose');
var loadJSON = require('../src/loadJSON');
var foodItemsSchema = require('../models/foodItemsSchema');

mongoose.connect('mongodb://mongo:27017/foodItemsDB', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connected");
    const foodItemModel = mongoose.model('foodItem', foodItemsSchema);
    foodItemModel.insertMany(loadJSON('../scripts/cardapio.json'), function(err) {
        if (err) console.log("error");
        mongoose.disconnect(function(){console.log("disconnected")});
    });
});