import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from "./Form";

const API = process.env.REACT_APP_API_URL;
function EditCar({ role }) {
  const [car, setCar] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${API}/cars/${id}`)
      .then((res) => setCar(res.data.result))
      .catch((e) => console.log(e));
  }, [id]);
  const editACar = (car) => {
    axios
      .put(`${API}/cars/${id}`, car)
      .then(() => navigate("/cars"))
      .catch((e) => console.log(e));
  };
  return <Form carInfo={car} submitHandler={editACar} />;
}

export default EditCar;
