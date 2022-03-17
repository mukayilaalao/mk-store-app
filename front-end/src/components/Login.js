import { Link } from "react-router-dom";
import FlashMessage from "react-flash-message";

function Login({ handleTextChange, state, err, handleSubmit }) {
  return (
    <div className="login">
      <FlashMessage>
        <p className="error">{err}</p>
      </FlashMessage>
      <form onSubmit={(e) => handleSubmit(e)}>
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
