const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let keyinsightSchema = new Schema({
    total_power_generation: Number,
    co2_reduction: Number,
    reduction_power_rate_previous_year: Number,
    power_surplus_2019: Number,
    power_surplus_2020: Number,
    emobility_user: Number,
    renewable_enery_consuption: Number,
    monthly: []
});

const keyinsight = mongoose.model("keyinsight", keyinsightSchema);
module.exports = keyinsight;