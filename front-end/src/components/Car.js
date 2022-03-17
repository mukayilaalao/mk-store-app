import { Link } from "react-router-dom";

import formatPrice from "../helpers/moneyFormat";
import formatting from "../helpers/format";

function Car({ car }) {
  return (
    <section className="car">
      <div>
        <Link to={`/cars/${car.id}`}>
          <h3>{car.name}</h3>
          <img src={car.image} alt={car.name} />
        </Link>
      </div>
      <p>{car.color}</p>
      <h4>{formatting(formatPrice(car.price))}</h4>
      <h5>{car.status}</h5>
    </section>
  );
}

export default Car;
