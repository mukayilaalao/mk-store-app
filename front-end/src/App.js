import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

const App = () => {
  const [cart, setCart] = useState([]);
  const addToTheCart = (car) => {
    setCart([...cart, car]);
  };
  const [state, setState] = useState({
    username: "",
    password: "",
    isLogout: false,
  });

  const handleTextChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  const removeFromTheCart = (carToRemoved) => {
    const newCart = [...cart].filter((car) => car.id !== carToRemoved.id);
    setCart(newCart);
  };
  return (
    <Router>
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
              state={state}
              setState={setState}
            />
          }
        />
        <Route
          path="/users/logout"
          element={
            <LogOut
              username={state.username}
              setState={setState}
              state={state}
            />
          }
        />
        <Route path="/cars" element={<Index />} />
        <Route path="/cars/new" element={<New />} />
        <Route
          path="/cars/:id"
          element={<Show addToTheCart={addToTheCart} />}
        />
        <Route path="/cars/:id/edit" element={<Edit />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
      <ShoppingCart cart={cart} removeFromTheCart={removeFromTheCart} />
      <Foot />
    </Router>
  );
};

export default App;
