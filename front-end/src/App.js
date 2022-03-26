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
  //order success message
  const [message, setMessage] = useState("");
  const addToTheCart = (car) => {
    if (
      cart.every((pCar) => pCar.id !== car.id) &&
      car.status.toLowerCase() !== "sold"
    )
      setCart([...cart, car]);
    else if (car.status.toLowerCase() === "sold")
      setMessage("Sorry, this car is already sold!");
  };
  //login form state
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  //user account state
  const [userAccount, setUserAccount] = useState({
    isLogout: true,
  });
  const navigate = useNavigate();
  //login error
  const [errObj, setErrObj] = useState({
    err: "",
    showError: false,
  });
  //login state
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(state);
    axios
      .post(`${API}/users/login`, state)
      .then((res) => {
        setState({
          username: "",
          password: "",
        });
        setErrObj({ err: "", showError: false });
        setUserAccount({ isLogout: false, ...res.data.result });
        navigate("/");
      })
      .catch((e) => {
        if (e.response)
          setErrObj({
            ...errObj,
            err:
              typeof e.response.data === "string"
                ? e.response.data
                : e.response.data.result,
            showError: true,
          });
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
      <NavBar username={userAccount.username} isLogout={userAccount.isLogout} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              username={userAccount.username}
              isLogout={userAccount.isLogout}
            />
          }
        />
        <Route path="/users/register" element={<Register />} />
        <Route
          path="/users/login"
          element={
            <Login
              state={state}
              handleTextChange={handleTextChange}
              handleSubmit={handleSubmit}
              errObj={errObj}
            />
          }
        />
        <Route
          path="/users/logout"
          element={
            <LogOut setUserAccount={setUserAccount} userAccount={userAccount} />
          }
        />
        <Route
          path="/users/:user_id/orders"
          element={
            <Orders message={message.includes("Order") ? message : ""} />
          }
        />
        <Route path="/cars" element={<Index />} />
        <Route
          path="/cars/new"
          element={
            <New role={!userAccount.role ? "basic" : userAccount.role} />
          }
        />
        <Route
          path="/cars/:id"
          element={
            <Show
              addToTheCart={addToTheCart}
              message={message.includes("sold") ? message : ""}
              role={!userAccount.role ? "basic" : userAccount.role}
            />
          }
        />
        <Route
          path="/cars/:id/edit"
          element={
            <Edit role={!userAccount.role ? "basic" : userAccount.role} />
          }
        />
        <Route path="*" element={<FourOFour />} />
      </Routes>
      <ShoppingCart
        setMessage={setMessage}
        cart={cart}
        setCart={setCart}
        removeFromTheCart={removeFromTheCart}
        userAccount={userAccount}
      />
      <Foot />
    </div>
  );
};

export default App;
