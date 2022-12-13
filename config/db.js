require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connect = async () => {
  return mongoose.connect(process.env.MONGO_URL)
};
module.exports = connect;
