import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;
function Login({ handleTextChange, setState, state }) {
  const navigate = useNavigate();
  const [err, setErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(state);
    axios
      .post(`${API}/users/login`, state)
      .then((res) => {
        setState({ ...state, isLogout: false });
        navigate("/");
      })
      .catch((e) => setErr(e.response.data));
  };

  return (
    <div className="login">
      <p className="error">{err}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          id="username"
          value={state.username}
          onChange={(e) => handleTextChange(e)}
          placeholder="Username..."
          autoFocus
          required
        />
        <hr />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          id="password"
          value={state.password}
          onChange={(e) => handleTextChange(e)}
          placeholder="Password..."
          required
        />
        <hr />
        <button type="submit">Login</button>
      </form>
      <div>
        <Link to="/users/register">Don't have an account?</Link>
      </div>
    </div>
  );
}

export default Login;
