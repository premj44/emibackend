const express = require("express");
const app = express.Router();

app.post("/", (req, res) => {
  const { LoanAmount, IntrestRate, TenureInMonths } = req.body;
  r = IntrestRate / (12 * 100);
  P = LoanAmount;
  n = TenureInMonths;
  let EMI = P * r * (1 + (r * n) / ((1 + r) * n - 1));
  let total = EMI * 36;
  let intrest = total - LoanAmount;
  res.status(200).send({ EMI, total, intrest });
});
module.exports = app;
