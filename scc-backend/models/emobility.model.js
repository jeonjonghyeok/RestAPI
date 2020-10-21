const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let emobilitySchema = new Schema({
    cumulative_ride: Number,
    electric_vehical_shared: Number,
    parking_are_reduction: Number,
    renewable_energy_consumption: Number,
    traffic_sharing_rate: Number,
    greego: Number,
    drt: Number,
    twizy: Number,
    un1: Number,
    un2: Number,
    un3: Number
});

const emobility = mongoose.model("emobility", emobilitySchema);

module.exports = emobility;