function ShoppingCart({ cart }) {
  const calculateTotal = (arr) => {
    return arr.map((car) => Number(car.price)).reduce((a, b) => a + b, 0);
  };
  const formatPrice = (nbr) => {
    return "$" + nbr.toFixed(2);
  };
  return (
    <div>
      <h2>Shopping Cart</h2>
      <section>
        <ul>
          {cart.map((car) => (
            <li key={car.id}>
              <h4>Car Name: {car.name}</h4>
              <p>Car Price Before Tax: {formatPrice(car.price)}</p>
            </li>
          ))}
        </ul>
        <p>
          <strong>SubTotal:</strong> {formatPrice(calculateTotal(cart))}
        </p>
        <p>
          <strong>Tax:</strong> {formatPrice(calculateTotal(cart) * 0.08875)}
        </p>
        <h3>Total: {formatPrice(calculateTotal(cart) * 1.08875)}</h3>
        <button>Pay Now</button>
      </section>
    </div>
  );
}

export default ShoppingCart;
