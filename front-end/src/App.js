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

const App = () => {
  const [cart, setCart] = useState([]);
  const addToTheCart = (car) => {
    setCart([...cart, car]);
  };
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Index />} />
        <Route path="/cars/new" element={<New />} />
        <Route
          path="/cars/:id"
          element={<Show addToTheCart={addToTheCart} />}
        />
        <Route path="/cars/:id/edit" element={<Edit />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
      <ShoppingCart cart={cart} />
      <Foot />
    </Router>
  );
};

export default App;
