// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();
const router = require("./controllers/cars.js");
// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!\n Welcome to the backend engine");
});
app.use("/cars", router);
app.get("*", (req, res) => {
  res.status(404).send({ success: false, result: "general error" });
});
// EXPORT
module.exports = app;
