import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EditReview from "./EditReview";
import AddReview from "./AddReview";
const API = process.env.REACT_APP_API_URL;

function Reviews() {
  const [reviews, setReviews] = useState([]);
  //see reviews or not
  const [reviewsView, setReviewsView] = useState(false);
  //see review update form or not
  const [contentView, setContentView] = useState({
    showContent: true,
    clickedReviewId: null,
  });
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
  const handleContentView = (id) => {
    setContentView({
      ...contentView,
      showContent: !contentView.showContent,
      clickedReviewId: id,
    });
  };
  return (
    <div>
      <button onClick={handleReviews}> See This Car Reviews</button>
      {reviewsView ? (
        <div>
          <AddReview reviews={reviews} setReviews={setReviews} />

          <section>
            {reviews.map((review) => (
              <div key={review.id}>
                <button onClick={() => handleContentView(review.id)}>
                  Edit Content
                </button>
                {!contentView.showContent &&
                contentView.clickedReviewId === review.id ? (
                  <EditReview
                    reviewInfo={review}
                    reviews={reviews}
                    setReviews={setReviews}
                  />
                ) : (
                  <section>
                    <h3>{review.reviewer}</h3>
                    <p>{review.content}</p>
                    <p>{review.rev_rating}</p>
                  </section>
                )}
              </div>
            ))}
          </section>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Reviews;
