//Defining Mongoose onto a variable
const mongoose = require("mongoose");
//Mongoose Schema
const Schema = mongoose.Schema;
//Map Insight Model
const mapinsightsSchema = new Schema({
    jungmun: {
        musers: { type: Number },
        mcharge: { type: Number },
        mco2reduction: { type: Number }
    },
    sinchang: {
        mpowergenaration: { type: Number },
        msurplus: { type: Number },
        mco2reduction: { type: Number }
    },
    seogwi: {
        musers: { type: Number },
        mcharge: { type: Number },
        mco2reduction: { type: Number }
    },
    gashiri: {
        musers: { type: Number },
        mcharge: { type: Number },
        mco2reduction: { type: Number }
    },
    haengwon: {
        musers: { type: Number },
        mcharge: { type: Number },
        mco2reduction: { type: Number }
    },
    shelter: {
        musers: { type: Number },
        mcharge: { type: Number },
        mco2reduction: { type: Number }
    },
    publicfacilities: {
        musers: { type: Number },
        mcharge: { type: Number },
        mco2reduction: { type: Number }
    },
    drt: {
        musers: { type: Number },
        mcharge: { type: Number },
        mco2reduction: { type: Number }
    },
});
//Exporting Map Insights Model
const mapinsights = mongoose.model("mapinsights", mapinsightsSchema);
module.exports = mapinsights;
