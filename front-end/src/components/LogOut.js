import Home from "../pages/Home";
import { useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;
function LogOut({ username, setState, state }) {
  useEffect(() => {
    axios
      .get(`${API}/users/logout`)
      .then(() => {
        setState({ ...state, password: "", isLogout: true });
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      <h3>
        Thank you for visiting us {username}, we appreciate your business and
        see you soon!!!
      </h3>
      <Home />
    </div>
  );
}

export default LogOut;
