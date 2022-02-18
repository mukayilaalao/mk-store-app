import { Link } from "react-router-dom";

function Car({ car }) {
  return (
    <section className="car">
      <div>
        <Link to={`/cars/${car.id}`}>
          <h3>{car.name}</h3>
          <img src={car.image} alt={car.name} />
        </Link>
      </div>
      <p className="description">{car.description}</p>
      <h4>${car.price}</h4>
    </section>
  );
}

export default Car;
