import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;
function Register() {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleTextChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API}/users/register`, state)
      .then(() => navigate("/users/login"))
      .catch((e) => {
        if (e.response) setError(e.response.data.result);
      });
  };

  return (
    <div className="register">
      <div className="error">{error}</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          id="username"
          value={state.username}
          onChange={handleTextChange}
          placeholder="Username..."
          autoFocus
          required
        />
        <hr />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          id="email"
          value={state.email}
          onChange={handleTextChange}
          placeholder="Email..."
          required
        />
        <hr />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          id="password"
          value={state.password}
          onChange={handleTextChange}
          placeholder="Password..."
          required
        />
        <hr />
        <label htmlFor="password2">Confirm Password</label>
        <br />
        <input
          type="password"
          id="password2"
          value={state.password2}
          onChange={handleTextChange}
          placeholder="Password..."
          required
        />
        <hr />
        <button type="submit">Continue</button>
      </form>
      <div>
        <Link to="/users/login">Already have an account?</Link>
      </div>
    </div>
  );
}

export default Register;
