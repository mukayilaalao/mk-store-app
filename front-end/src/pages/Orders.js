import FlashMessage from "react-flash-message";
import { Link } from "react-router-dom";

function Orders({ message }) {
  return (
    <div>
      <FlashMessage duration={5000}>
        <p className="success-message">
          <strong>{message}</strong>
          {"✅"}
        </p>
      </FlashMessage>
      <h3>Your Order:</h3>
      <Link to="/cars">Continue Shopping</Link>
    </div>
  );
}

export default Orders;
