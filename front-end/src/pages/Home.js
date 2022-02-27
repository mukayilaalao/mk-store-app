import { Link } from "react-router-dom";
import FeaturedCars from "../components/FeaturedCars";

function Home({ username }) {
  return (
    <div className="home">
      {username ? (
        <h3>Welcome {username}!!</h3>
      ) : (
        <section>
          <h4>
            <Link to="/users/login">Login</Link>
          </h4>
          <p>
            <Link to="/users/register">Sign Up</Link>
          </p>
        </section>
      )}

      <h1>
        Mk Dealership, we appreciate your business, keep navigating, good deals
        are waiting....
      </h1>

      <FeaturedCars />
    </div>
  );
}

export default Home;
