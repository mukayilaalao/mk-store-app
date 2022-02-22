import axios from "axios";
import { useParams } from "react-router-dom";
import ReviewForm from "./ReviewForm";

const API = process.env.REACT_APP_API_URL;
function AddReview({ setReviews, reviews }) {
  const { id } = useParams();

  const addReview = (rev) => {
    axios
      .post(`${API}/cars/${id}/reviews`, rev)
      .then(() => {
        setReviews([...reviews, rev]);
      })
      .catch((e) => console.log(e));
  };
  return (
    <ReviewForm reviewHandler={addReview} setReviews={setReviews}>
      <h3>Add a New Review</h3>
    </ReviewForm>
  );
}

export default AddReview;
