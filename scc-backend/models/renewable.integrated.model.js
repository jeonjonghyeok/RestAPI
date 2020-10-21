//Defining Mongoose onto a variable
const mongoose = require("mongoose");
//Mongoose Schema
const Schema = mongoose.Schema;
//Integrated Dashboard Renewable Model
const renewableintegratedSchema = new Schema({
  cumulative_power_generation: { type: Number },
  total_facility_capacity: { type: Number },
  co2_reduction: { type: Number },
  drinking_water_effect: { type: Number },
  number_of_chargers_installed: { type: Number },
  electricity_extraction_volume: { type: Number }
});
//Exporting Integrated Dashboard Renewable Model
const renewableintegrated = mongoose.model("renewableintegrated", renewableintegratedSchema);
module.exports = renewableintegrated;