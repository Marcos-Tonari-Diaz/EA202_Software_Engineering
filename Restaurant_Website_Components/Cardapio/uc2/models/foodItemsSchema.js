var mongoose = require("mongoose");

var foodItemSchema = new mongoose.Schema({
    "name": String,
    "description": String,
    "price": Number,
    "category": String,
    "image_path": String
});

module.exports = foodItemSchema;
