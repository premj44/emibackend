const mongoose = require("mongoose");
const AuthSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: String,
});
const UserModel = mongoose.model("user", AuthSchema);
module.exports = UserModel;
