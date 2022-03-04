const express = require("express");
//secure pass
const bcrypt = require("bcrypt");
const passport = require("passport");
const usersController = express.Router();
//orders controller
const orders = require("./orders.js");
const db = require("../db/dbConfig.js");
const initialize = require("../passportConfig.js");
//middleware func
const { regValidation } = require("../validation/users.js");
usersController.use("/:user_id/orders", orders);
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
    const role = await db.one(
      "INSERT INTO roles(role,user_id) VALUES($1,$2) RETURNING *",
      [username === "admin" ? "admin" : "basic", user.id]
    );
    res.json({ success: true, result: { ...user, role: role.role } });
  } catch (error) {
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
usersController.post(
  "/login",
  passport.authenticate("local"),
  async (req, res) => {
    try {
      const { username } = req.body;
      const user = await db.one(
        "SELECT id, username, email FROM users WHERE username=$1",
        username
      );
      const role = await db.one(
        "SELECT user_id,role FROM roles WHERE user_id=$1",
        user.id
      );
      res.status(200).json({
        success: true,
        result: {
          username: user.username,
          email: user.email,
          role: role.role,
          user_id: role.user_id,
        },
      });
    } catch (error) {
      res
        .status(404)
        .json({ success: false, result: "Register first please!" });
    }
  }
);

module.exports = usersController;
