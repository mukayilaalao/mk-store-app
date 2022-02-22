import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ReviewForm(props) {
  const { reviewHandler, reviewInfo } = props;
  const { id } = useParams();
  const [review, setReview] = useState({
    reviewer: "",
    content: "",
    rev_rating: 5,
    car_id: id,
  });
  useEffect(() => {
    if (reviewInfo) setReview(reviewInfo);
  }, [reviewInfo]);
  const handleTextChange = (e) => {
    setReview({ ...review, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    reviewHandler(review);
    setReview({
      reviewer: "",
      content: "",
      rev_rating: 5,
      car_id: id,
    });
  };
  return (
    <div className="review-form">
      {props.children}
      <form onSubmit={handleSubmit}>
        <label htmlFor="reviewer">Reviewer Name</label>
        <br />
        <input
          type="text"
          id="reviewer"
          value={review.reviewer}
          onChange={handleTextChange}
          placeholder="name..."
        />
        <hr />
        <label htmlFor="content">Feedback</label>
        <br />
        <textarea
          type="text"
          id="content"
          value={review.content}
          onChange={handleTextChange}
          placeholder="feedback..."
        />

        <hr />
        <label htmlFor="rev_rating">Rate This Car</label>
        <br />
        <input
          type="range"
          min="0"
          max="5"
          id="rev_rating"
          value={review.rev_rating}
          onChange={handleTextChange}
        />

        <hr />
        <input type="submit" />
      </form>
    </div>
  );
}

export default ReviewForm;
