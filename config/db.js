const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connect = async () => {
  return mongoose.connect("mongodb+srv://prem:prem@cluster0.keahpj3.mongodb.net/project");
};
module.exports = connect;
