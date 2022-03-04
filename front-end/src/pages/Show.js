import CarDetails from "../components/CarDetails";

function Show({ addToTheCart, role }) {
  return (
    <div>
      <h2>Car Details</h2>
      <CarDetails addToTheCart={addToTheCart} role={role} />
    </div>
  );
}

export default Show;
