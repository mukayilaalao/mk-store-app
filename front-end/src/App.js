import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;
const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Index />} />
        <Route path="/cars/new" element={<New />} />
        <Route path="/cars/:id" element={<Show />} />
        <Route path="/cars/:id/edit" element={<Edit />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
      <Foot />
    </Router>
  );
};

export default App;
