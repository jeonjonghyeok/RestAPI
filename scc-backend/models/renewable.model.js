//Defining Mongoose onto a variable
const mongoose = require("mongoose");
//Mongoose Schema
const Schema = mongoose.Schema;
//Renewable Model
const renewableSchema = new Schema({
  solar: {
    cumulative_power_generation: { type: Number },
    facility_capacity: { type: Number },
    co2_reduction: { type: Number },
    drinking_water_effect: { type: Number },
    current_output: { type: Number },
    weekly_power_generation: {
      1: { type: Number },
      2: { type: Number },
      3: { type: Number },
      4: { type: Number },
      5: { type: Number },
      6: { type: Number },
      7: { type: Number }
    },
    monthly_power_generation: {
      1: { type: Number },
      2: { type: Number },
      3: { type: Number },
      4: { type: Number },
      5: { type: Number },
      6: { type: Number },
      7: { type: Number },
      8: { type: Number },
      9: { type: Number },
      10: { type: Number },
      11: { type: Number },
      12: { type: Number }
    }
  },
  wind: {
    cumulative_power_generation: { type: Number },
    facility_capacity: { type: Number },
    co2_reduction: { type: Number },
    drinking_water_effect: { type: Number },
    current_output: { type: Number },
    weekly_power_generation: {
      1: { type: Number },
      2: { type: Number },
      3: { type: Number },
      4: { type: Number },
      5: { type: Number },
      6: { type: Number },
      7: { type: Number }
    },
    monthly_power_generation: {
      1: { type: Number },
      2: { type: Number },
      3: { type: Number },
      4: { type: Number },
      5: { type: Number },
      6: { type: Number },
      7: { type: Number },
      8: { type: Number },
      9: { type: Number },
      10: { type: Number },
      11: { type: Number },
      12: { type: Number }
    }
  }

});
//Exporting Renewable Model
const renewable = mongoose.model("renewable", renewableSchema);
module.exports = renewable;
