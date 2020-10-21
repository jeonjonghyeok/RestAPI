const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let emobilityIntegratedSchema = new Schema({
    members: Number,
    cumulative_ride: Number,
    electric_vehical_shared: Number,
    ecar_available: Number,
    ecar_unusable: Number,
    ecar_charging: Number,
    ecar_total: Number,
    ekickboard_available: Number,
    ekickboard_unusable: Number,
    ekickboard_charging: Number,
    ekickboard_total: Number
});

const emobilityIntegrated = mongoose.model("emobilityIntegrated", emobilityIntegratedSchema);

module.exports = emobilityIntegrated;