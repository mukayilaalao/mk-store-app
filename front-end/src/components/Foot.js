import { Link } from "react-router-dom";

function Foot() {
  return (
    <footer className="foot-section">
      <div>
        <Link to="/">
          <h2>Mk DealerShip</h2>
        </Link>

        <h3>Our Partners</h3>
      </div>
      <div>
        <div>
          <button>Contact us</button>
        </div>
        <div>
          <button>About us</button>
        </div>
        <div>
          <button>Call us</button>
        </div>
      </div>
      <div className="option-buttons">
        <div>
          <button>Learn about our business</button>
        </div>
        <div>
          <button>opportunities</button>
        </div>
        <div>
          <button>Our Missions</button>
        </div>
      </div>
    </footer>
  );
}

export default Foot;
