import { useState } from "react";
import { Link } from "react-router-dom";
function Register() {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleTextChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
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
        <button type="submit">Continue</button>
      </form>
      <div>
        <Link to="/login">Already have an account?</Link>
      </div>
    </div>
  );
}

export default Register;
