import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Car from "./Car";
const API = process.env.REACT_APP_API_URL;

function Cars() {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${API}/cars`)
      .then((res) => setCars(res.data.result))
      .catch(() => navigate("/not-found"));
  }, []);
  return (
    <div className="cars">
      {cars.map((car) => (
        <Car key={car.id} car={car} />
      ))}
    </div>
  );
}

export default Cars;
