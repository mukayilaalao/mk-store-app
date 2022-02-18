import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
const API = process.env.REACT_APP_API_URL;
//post request to create a new car
function AddCar() {
  const navigate = useNavigate();
  const addACar = (car) => {
    axios
      .post(`${API}/cars`, car)
      .then(() => navigate("/cars"))
      .catch((e) => console.log(e));
  };

  return <Form handleSubmit={addACar} />;
}

export default AddCar;
