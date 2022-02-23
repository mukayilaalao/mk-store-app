const db = require("../db/dbConfig.js");

//query all cars
const getAllCars = async () => {
  try {
    const cars = await db.any("SELECT * FROM cars");
    return cars;
  } catch (error) {
    return error;
  }
};
//get all featured cars
const getAllFeaturedCars = async () => {
  try {
    const cars = await db.any("SELECT * FROM cars WHERE featured=$1", true);
    return cars;
  } catch (error) {
    return error;
  }
};
//query one car
const getOneCar = async (id) => {
  try {
    const car = await db.one("SELECT * FROM cars WHERE id=$1", id);
    return car;
  } catch (error) {
    return error;
  }
};
//query to update a car
const updateACar = async (id, car) => {
  try {
    const updatedCar = await db.one(
      "UPDATE cars SET vim=$1,name=$2,description=$3,price=$4,rating=$5,featured=$6,image=$7,color=$8,year=$9,mileage=$10 WHERE id=$11 RETURNING *",
      [
        car.vim,
        car.name,
        car.description,
        car.price,
        car.rating,
        car.featured,
        car.image,
        car.color,
        car.year,
        car.mileage,
        id,
      ]
    );
    return updatedCar;
  } catch (error) {
    return error;
  }
};
//query to delete a car
const deleteACar = async (id) => {
  try {
    const deletedCar = await db.one(
      "DELETE FROM cars WHERE id=$1 RETURNING *",
      id
    );
    return deletedCar;
  } catch (error) {
    return error;
  }
};
//query to create a new car
const createACar = async (car) => {
  try {
    const createdCar = await db.one(
      "INSERT INTO cars (vim,name,description,price,rating,featured,image,color,year,mileage) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *",
      [
        car.vim,
        car.name,
        car.description,
        car.price,
        car.rating,
        car.featured,
        car.image,
        car.color,
        car.year,
        car.mileage,
      ]
    );
    return createdCar;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllCars,
  getOneCar,
  createACar,
  updateACar,
  deleteACar,
  getAllFeaturedCars,
};
