import { Link } from "react-router-dom";
import FeaturedCars from "../components/FeaturedCars";

function Home() {
  return (
    <div className="home">
      <h1>
        Welcome to Mk Dealership, we appreciate your business, keep navigating,
        good deals are waiting....
      </h1>
      <section>
        <h4>
          <Link to="/users/login">Login</Link>
        </h4>
        <p>
          <Link to="/users/register">Sign Up</Link>
        </p>
      </section>
      <FeaturedCars />
    </div>
  );
}

export default Home;
