import CarDetails from "../components/CarDetails";

function Show({ addToTheCart }) {
  return (
    <div>
      <h2>Car Details</h2>
      <CarDetails addToTheCart={addToTheCart} />
    </div>
  );
}

export default Show;
