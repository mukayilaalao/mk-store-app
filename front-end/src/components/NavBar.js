import { Link } from "react-router-dom";

function NavBar({ username, isLogout }) {
  return (
    <nav className="nav-bar">
      <h1>
        <Link to="/cars">All Cars</Link>
      </h1>
      {isLogout === false && username === "admin" ? (
        <Link to="/cars/new">
          <button>Add a New Car</button>
        </Link>
      ) : isLogout ? (
        ""
      ) : (
        <div className="user-log">
          <span>
            Logged in as:
            <br /> <strong>{username}</strong>
          </span>
          <span>
            <Link to="/users/logout">Logout</Link>
          </span>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
