const mongoose = require("mongoose");

var Employee = mongoose.model("Employee", {
  name: { type: String, required: true },
  id: { type: String, required: true, unique: true },
  subject: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = { Employee };
