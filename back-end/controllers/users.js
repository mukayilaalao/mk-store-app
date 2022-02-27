const express = require("express");
//secure pass
const bcrypt = require("bcrypt");
const passport = require("passport");
const usersController = express.Router();
const db = require("../db/dbConfig.js");
const initialize = require("../passportConfig.js");
//middleware func
const { regValidation } = require("../validation/users.js");

//initialize passport
initialize(passport);

//register
usersController.post("/register", regValidation, async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await db.one(
      "INSERT INTO users(username,email,password) VALUES($1,$2,$3) RETURNING *",
      [username, email, hashPassword]
    );
    res.json({ success: true, result: user });
  } catch (error) {
    console.log(error);
    res.status(422).json({
      success: false,
      result: "Error while creating account, email already existed",
    });
  }
});
usersController.get("/logout", (req, res) => {
  req.logOut();
  res.status(200).json({ success: true });
});
usersController.post("/login", passport.authenticate("local"), (req, res) => {
  res.status(200).json({ success: true });
});

module.exports = usersController;
