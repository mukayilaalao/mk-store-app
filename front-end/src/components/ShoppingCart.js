import { useState } from "react";

function ShoppingCart({ cart }) {
  const calculateTotal = (arr) => {
    return arr.map((car) => Number(car.price)).reduce((a, b) => a + b);
  };
  return (
    <div>
      <h2>Shopping Cart</h2>
      <section>
        <ul>
          {cart.map((car) => (
            <li key={car.id}>
              <h4>Car Name: {car.name}</h4>
              <p>Car Price Before Tax: {car.price}</p>
            </li>
          ))}
        </ul>
        <p>
          <strong>SubTotal:</strong> {calculateTotal(cart)}
        </p>
        <p>
          <strong>Tax:</strong> {calculateTotal(cart) * 0.08875}
        </p>
        <h3>Total: {calculateTotal(cart) * 1.08875}</h3>
        <button>Pay Now</button>
      </section>
    </div>
  );
}

export default ShoppingCart;
