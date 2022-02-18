import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;
function CarDetails() {
  const [car, setCar] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${API}/cars/${id}`)
      .then((res) => setCar(res.data.result))
      .catch((e) => console.log(e));
  }, [id]);
  const handleDelete = () => {
    axios
      .delete(`${API}/cars/${id}`)
      .then(() => navigate("/cars"))
      .catch((e) => console.log(e));
  };
  return (
    <article>
      <div>
        <img src={car.image} alt={car.name} />
        <h4>Name: {car.name}</h4>
        <p>Color: {car.color}</p>
        <h5>Vim number: {car.vim}</h5>
        <h5>Price: ${car.price}</h5>
        <p className="description">{car.description}</p>
        <p>Rating: {car.rating}</p>
      </div>
      <div className="showBackEditDelete">
        <div>
          <Link to="/cars">
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/cars/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default CarDetails;
