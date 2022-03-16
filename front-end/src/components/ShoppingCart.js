import formatPrice from "../helpers/moneyFormat";
import formatting from "../helpers/format";
import calculateTotal from "../helpers/calculateTotal";
import { Link } from "react-router-dom";
function ShoppingCart({ cart, removeFromTheCart, userAccount }) {
  return (
    <div>
      {cart.length ? (
        <section>
          <h2>Shopping Cart</h2>
          <h3>item(s): {cart.length}</h3>
          <ul className="removed-cars">
            {cart.map((car) => (
              <li key={car.id}>
                <h4>Car Name: {car.name}</h4>
                <p>
                  Car Price Before Tax: {formatting(formatPrice(car.price))}
                </p>
                <button onClick={() => removeFromTheCart(car)}>
                  Remove The Car
                </button>
              </li>
            ))}
          </ul>
          <p>
            <strong>SubTotal:</strong>{" "}
            {formatting(formatPrice(calculateTotal(cart)))}
          </p>
          <p>
            <strong>Tax:</strong>{" "}
            {formatting(formatPrice(calculateTotal(cart) * 0.08875))}
          </p>
          <h3>
            Total: {formatting(formatPrice(calculateTotal(cart) * 1.08875))}
          </h3>
          {userAccount.isLogout === false ? (
            <Link to={`/users/${userAccount.user_id}/orders`}>
              <button>Order Now</button>
            </Link>
          ) : (
            <Link to="users/login">
              <button>Please Login first</button>
            </Link>
          )}
        </section>
      ) : (
        ""
      )}
    </div>
  );
}

export default ShoppingCart;
