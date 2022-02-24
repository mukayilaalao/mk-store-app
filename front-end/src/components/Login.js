import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const handleTextChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
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

        <input
          type="password"
          id="password"
          value={state.password}
          onChange={handleTextChange}
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
