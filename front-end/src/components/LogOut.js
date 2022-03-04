import Home from "../pages/Home";
import { useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;
function LogOut({ userAccount, setUserAccount }) {
  useEffect(() => {
    axios
      .get(`${API}/users/logout`)
      .then(() => {
        setUserAccount({ ...userAccount, isLogout: true });
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      <h3>
        Thank you for visiting us {userAccount.username}, we appreciate your
        business and see you soon!!!
      </h3>
      <Home />
    </div>
  );
}

export default LogOut;
