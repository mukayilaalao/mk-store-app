const express = require("express");
const router = express.Router();
//Import queries functions
const {
  getAllCars,
  getOneCar,
  createACar,
  updateACar,
  deleteACar,
} = require("../queries/cars.js");
// import validation functions
const {
  capitalizedName,
  checkPrice,
  checkVim,
  checkName,
  addDefaultImage,
} = require("../validation/cars.js");
//get all cars
router.get("/", async (req, res) => {
  const cars = await getAllCars();
  if (cars[0]) {
    res.json({ success: true, result: cars });
  } else res.redirect("/*");
});
//get a car
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const car = await getOneCar(id);
  if (car.id) {
    res.json({ success: true, result: car });
  } else res.redirect("/*");
});
//delete a car
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedCar = await deleteACar(id);
  if (deletedCar.id) {
    res.json({ success: true, result: deletedCar });
  } else res.redirect("/*");
});
//update a car
router.put("/:id", checkName, checkPrice, checkVim, async (req, res) => {
  const { id } = req.params;
  let car = req.body;
  car = { ...car, name: capitalizedName(car.name) };
  const updatedCar = await updateACar(id, addDefaultImage(car));
  if (updatedCar.id) {
    res.json({ success: true, result: updatedCar });
  } else res.redirect("/*");
});
//create a car
router.post("/", checkName, checkPrice, checkVim, async (req, res) => {
  let car = req.body;
  car = { ...car, name: capitalizedName(car.name) };
  const createdCar = await createACar(addDefaultImage(car));
  if (createdCar.id) {
    res.json({ success: true, result: createdCar });
  } else res.redirect("/*");
});
module.exports = router;
