//Defining Mongoose onto a variable
const mongoose = require("mongoose");
//Mongoose Schema
const Schema = mongoose.Schema;
//Map Insight Model
const mapinsightsSchema = new Schema({
    title : { type: String },
    type : { type: String },
    lat : { type: Number },
    lng : { type: Number },
    details: []
});
//Exporting Map Insights Model
const mapinsights = mongoose.model("mapinsights", mapinsightsSchema);
module.exports = mapinsights;
