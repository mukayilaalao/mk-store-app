// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const session = require("express-session"); //manage session
const passport = require("passport");
//const flash = require("express-flash"); //flash messages

// CONFIGURATION
const app = express();
const router = require("./controllers/cars.js");
const usersController = require("./controllers/users.js");
// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON
//security middl
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize);
app.use(passport.session);
//app.use(flash());

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!\n Welcome to the backend engine");
});
app.use("/cars", router);
app.use("/users", usersController);
app.get("*", (req, res) => {
  res.status(404).send({ success: false, result: "general error" });
});
// EXPORT
module.exports = app;
