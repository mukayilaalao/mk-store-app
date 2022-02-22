import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;
function Reviews() {
  const [reviews, setReviews] = useState([]);
  //see reviews or not
  const [reviewsView, setReviewsView] = useState(false);
  //see review update form or not
  const [contentView, setContentView] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/cars/${id}/reviews`)
      .then((res) => setReviews(res.data.result))
      .catch((e) => console.log(e));
  }, [id]);
  const handleReviews = (e) => {
    setReviewsView(!reviewsView);
  };
  const handleContentView = (e) => {
    setContentView(!contentView);
  };
  return (
    <div>
      <button onClick={handleReviews}> See This Car Reviews</button>
      {reviewsView ? (
        <section>
          {reviews.map((review) => (
            <div>
              <button onClick={handleContentView}>Edit Content</button>
              <h3>{review.reviewer}</h3>
              <p>{review.content}</p>
              <p>{review.rev_rating}</p>
            </div>
          ))}
        </section>
      ) : (
        ""
      )}
    </div>
  );
}

export default Reviews;
