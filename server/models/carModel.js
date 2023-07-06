const mongoose = require("mongoose");

const CarSchema = mongoose.Schema({
  make: {
    type: String,
    required: [true, "Please add a make value"],
  },
  model: {
    type: String,
    required: [true, "Please add a model value"],
  },
  year: {
    type: Number,
    required: [true, "Please add a year value"],
  },
  description: {
    type: String,
  },
  price: {
    type: String,
    required: [true, "Please add a price value"],
  },
});

module.exports = mongoose.model("car", CarSchema);
