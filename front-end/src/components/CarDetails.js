import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Reviews from "./Reviews";
import formatPrice from "../helpers/moneyFormat";
import formatting from "../helpers/format";

const API = process.env.REACT_APP_API_URL;

function CarDetails({ addToTheCart, role }) {
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
      <div className="car-details">
        <img src={car.image} alt={car.name} />
        <h4>Name: {car.name}</h4>
        <p>Year: {car.year}</p>
        <p>Mileage: {car.mileage}</p>
        <p>Color: {car.color}</p>
        <h5>Vim number: {car.vim}</h5>
        <h5>Price: {formatting(formatPrice(car.price))}</h5>
        <p className="description">{car.description}</p>
        <p>Rating: {car.rating}</p>
        <p>Status:{car.status}</p>
        <button onClick={() => addToTheCart(car)}>Add To Cart</button>
      </div>
      <div className="showBackEditDelete">
        <div>
          <Link to="/cars">
            <button>Back</button>
          </Link>
        </div>
        <div>
          {role === "admin" ? (
            <Link to={`/cars/${id}/edit`}>
              <button>Edit</button>
            </Link>
          ) : (
            ""
          )}
        </div>
        <div>
          {role === "admin" ? (
            <button onClick={handleDelete}>Delete</button>
          ) : (
            ""
          )}
        </div>
      </div>
      <Reviews carName={car.name} />
    </article>
  );
}

export default CarDetails;
