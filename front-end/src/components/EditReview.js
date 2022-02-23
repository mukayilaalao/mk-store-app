import axios from "axios";

import { useParams } from "react-router-dom";
import ReviewForm from "./ReviewForm";

const API = process.env.REACT_APP_API_URL;
function EditReview({
  reviewInfo,
  setReviews,
  reviews,
  contentView,
  setContentView,
}) {
  const { id } = useParams();
  const editReview = (rev) => {
    axios
      .put(`${API}/cars/${id}/reviews/${reviewInfo.id}`, rev)
      .then(() => {
        const remainingRev = [...reviews].filter(
          (review) => review.id !== rev.id
        );
        setReviews([...remainingRev, rev]);
        setContentView({ ...contentView, showContent: true });
      })
      .catch((e) => console.log(e));
  };
  const deleteReview = (rev) => {
    axios
      .delete(`${API}/cars/${id}/reviews/${reviewInfo.id}`)
      .then(() => {
        setReviews([...reviews].filter((review) => review.id !== rev.id));
      })
      .catch((e) => console.log(e));
  };
  return (
    <ReviewForm
      reviewInfo={reviewInfo}
      reviewHandler={editReview}
      handleDelete={deleteReview}
    />
  );
}

export default EditReview;
