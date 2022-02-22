const express = require("express");
const reviews = express.Router({ mergeParams: true });
const {
  createReview,
  deleteReview,
  updateReview,
  getReview,
  getAllReviews,
} = require("../queries/reviews.js");
//get all reviews
reviews.get("/", async (req, res) => {
  const { car_id } = req.params;
  const reviews = await getAllReviews(car_id);
  if (reviews[0]) res.json({ success: true, result: reviews });
  else res.redirect("/*");
});
//get a single review
reviews.get("/:review_id", async (req, res) => {
  const { review_id } = req.params;
  const review = await getReview(review_id);
  if (review.id) res.json({ success: true, result: review });
  else res.redirect("/*");
});
//update a review
reviews.put("/:review_id", async (req, res) => {
  const { review_id } = req.params;
  const review = req.body;
  const updatedReview = await updateReview(review_id, review);
  if (updatedReview.id) res.json({ success: true, result: updatedReview });
  else res.redirect("/*");
});
//delete a review
reviews.delete("/:review_id", async (req, res) => {
  const { review_id } = req.params;
  const deletedReview = await deleteReview(review_id);
  if (deletedReview.id) res.json({ success: true, result: deletedReview });
  else res.redirect("/*");
});
//create a review
reviews.post("/", async (req, res) => {
  const { car_id } = req.params;
  const review = req.body;
  const createdReview = await createReview(car_id, review);
  if (createdReview.id) res.json({ success: true, result: createdReview });
  else res.redirect("/*");
});
module.exports = reviews;
