import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Car from "./Car";
const API = process.env.REACT_APP_API_URL;

function FeaturedCars() {
  const [featuredCars, setFeaturedCars] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${API}/cars/featured`)
      .then((res) => setFeaturedCars(res.data.result))
      .catch(() => navigate("/not-found"));
  }, []);
  return (
    <div className="cars">
      {featuredCars.map((car) => (
        <Car key={car.id} car={car} />
      ))}
    </div>
  );
}

export default FeaturedCars;
