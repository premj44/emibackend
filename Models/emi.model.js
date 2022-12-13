const mongoose = require("mongoose");
const emiSchema = mongoose.Schema({
  LoanAmount: Number,
  IntrestRate: Number,
  TenureInMonths: Number,
});
const emiModel = mongoose.Model("emiData", emiSchema);
module.exports = emiModel;
