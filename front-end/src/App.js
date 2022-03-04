import { Routes, Route } from "react-router-dom";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Foot from "./components/Foot";
import FourOFour from "./pages/FourOFour";
import Index from "./pages/Index";
import Show from "./pages/Show";
import Edit from "./pages/Edit";
import New from "./pages/New";
import Home from "./pages/Home";
import ShoppingCart from "./components/ShoppingCart";
import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import LogOut from "./components/LogOut";
import Orders from "./pages/Orders";

const API = process.env.REACT_APP_API_URL;
const App = () => {
  const [cart, setCart] = useState([]);
  const addToTheCart = (car) => {
    if (cart.every((pCar) => pCar.id !== car.id)) setCart([...cart, car]);
  };
  //login form state
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  //user account state
  const [userAccount, setUserAccount] = useState({});
  const navigate = useNavigate();
  //login error
  const [err, setErr] = useState("");
  //login state
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(state);
    axios
      .post(`${API}/users/login`, state)
      .then((res) => {
        console.log(res.data);

        setUserAccount({ isLogout: false, ...res.data.result });
        navigate("/");
      })
      .catch((e) => {
        setErr(
          typeof e.response.data === "string"
            ? e.response.data
            : e.response.data.result
        );
      });
  };
  const handleTextChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  const removeFromTheCart = (carToRemoved) => {
    const newCart = [...cart].filter((car) => car.id !== carToRemoved.id);
    setCart(newCart);
  };
  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home username={state.username} isLogout={state.isLogout} />}
        />
        <Route path="/users/register" element={<Register />} />
        <Route
          path="/users/login"
          element={
            <Login
              handleTextChange={handleTextChange}
              handleSubmit={handleSubmit}
              err={err}
            />
          }
        />
        <Route
          path="/users/logout"
          element={
            <LogOut
              username={userAccount.username}
              setState={setState}
              state={state}
            />
          }
        />
        <Route path="/users/:id/orders" element={<Orders />} />
        <Route path="/cars" element={<Index />} />
        <Route path="/cars/new" element={<New role={userAccount.role} />} />
        <Route
          path="/cars/:id"
          element={<Show addToTheCart={addToTheCart} role={userAccount.role} />}
        />
        <Route
          path="/cars/:id/edit"
          element={<Edit role={userAccount.role} />}
        />
        <Route path="*" element={<FourOFour />} />
      </Routes>
      <ShoppingCart cart={cart} removeFromTheCart={removeFromTheCart} />
      <Foot />
    </div>
  );
};

export default App;
