import CarDetails from "../components/CarDetails";

function Show({ addToTheCart, role, message }) {
  return (
    <div>
      <h2>Car Details</h2>
      <CarDetails addToTheCart={addToTheCart} role={role} message={message} />
    </div>
  );
}

export default Show;
