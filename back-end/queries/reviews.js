const db = require("../db/dbConfig.js");

//get a specific car reviews
const getAllReviews = async (car_id) => {
  try {
    const reviews = await db.any(
      "SELECT * FROM reviews WHERE car_id=$1",
      car_id
    );
    return reviews;
  } catch (error) {
    return error;
  }
};

//get a single review
const getReview = async (review_id) => {
  try {
    const review = await db.one("SELECT * FROM reviews WHERE id=$1", review_id);
    return review;
  } catch (error) {
    return error;
  }
};

//update a review
const updateReview = async (review_id, review) => {
  try {
    const updatedReview = await db.one(
      "UPDATE reviews SET reviewer=$1,content=$2,rev_rating=$3, car_id=$4 WHERE id=$5 RETURNING *",
      [
        review.reviewer,
        review.content,
        review.rev_rating,
        review.car_id,
        review_id,
      ]
    );
    return updatedReview;
  } catch (error) {
    return error;
  }
};
//delete a review
const deleteReview = async (review_id) => {
  try {
    const deletedReview = await db.one(
      "DELETE FROM reviews WHERE id=$1 RETURNING *",
      review_id
    );
    return deletedReview;
  } catch (error) {
    return error;
  }
};

//create a review
const createReview = async (car_id, review) => {
  try {
    const createdReview = await db.one(
      "INSERT INTO reviews(reviewer,content,rev_rating,car_id) VALUES($1,$2,$3,$4) RETURNING *",
      [review.reviewer, review.content, review.rev_rating, car_id]
    );
    return createdReview;
  } catch (error) {
    return error;
  }
};
module.exports = {
  createReview,
  deleteReview,
  updateReview,
  getReview,
  getAllReviews,
};
