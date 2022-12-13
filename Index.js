const express = require("express");
const connect = require("./config/db");
const cors = require("cors");
const userRoute = require("./Routes/user.route");
const emiRoute = require("./Routes/emi.route");
const app = express();

app.use(express.json());
app.use("/auth", userRoute);
app.use("/calculate", emiRoute);

app.listen(3000, async () => {
  try {
    await connect();
    console.log(`http://localhost:3000`);
  } catch (e) {
    console.log(e.message);
  }
});
