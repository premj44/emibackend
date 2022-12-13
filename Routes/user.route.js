const express = require("express");
const UserData = require("../Models/user.model");
const app = express.Router();

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let olduser = await UserData.findOne({ email });
    if (olduser) {
      return res.send(JSON.stringify("already"));
    }
    let user = new UserData({ name, email, password });
    await user.save();
    return res.send(JSON.stringify("suceess"));
  } catch (e) {
    res.send(e.message);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await UserData.findOne({ email });

    if (password === user.password && email === user.email) {
      return res.send(JSON.stringify({ mes: "success", name: user.name }));
    } else {
      return res.send(JSON.stringify("invalid"));
    }
  } catch {
    res.send(401).send("auth failed");
  }
});
module.exports = app;
