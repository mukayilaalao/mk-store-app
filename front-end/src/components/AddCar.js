import { useState, useEffect } from "react";
const API = process.env.REACT_APP_API_URL;
function AddCar() {
  const [car, setCar] = useState({
    vim: "",
    name: "",
    description: "",
    color: "",
    image: "",
    price: null,
    rating: 5,
    featured: false,
  });
  return (
    <div>
      <form></form>
    </div>
  );
}

export default AddCar;
