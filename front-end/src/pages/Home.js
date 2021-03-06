import { Link } from "react-router-dom";
import FeaturedCars from "../components/FeaturedCars";

function Home({ username, isLogout }) {
  return (
    <div className="home">
      {username && isLogout === false ? (
        <section className="welcome-log">
          <h3>Welcome {username}!!</h3>
        </section>
      ) : (
        <section className="welcome-log">
          <h4>
            <Link to="/users/login">Login</Link>
          </h4>
          <p>
            <Link to="/users/register">Sign Up</Link>
          </p>
        </section>
      )}
      <section>
        <h1>
          Mk Dealership, we appreciate your business, keep navigating, good
          deals are waiting....
        </h1>

        <FeaturedCars />
        {username === "admin" && isLogout === false ? (
          <div>
            <Link to="/users/logout">Logout</Link>
          </div>
        ) : (
          ""
        )}
      </section>
    </div>
  );
}

export default Home;
