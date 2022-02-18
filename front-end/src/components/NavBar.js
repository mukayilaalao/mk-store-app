import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-bar">
      <h1>
        <Link to="/cars">All Cars</Link>
      </h1>
      <Link to="/cars/new">
        <button>Add a New Car</button>
      </Link>
    </nav>
  );
}

export default NavBar;
