import FlashMessage from "react-flash-message";

function Orders({ message }) {
  return (
    <div>
      <FlashMessage duration={5000}>
        <p>
          <strong>{message}</strong>
          {"✅"}
        </p>
      </FlashMessage>
      <h3>Your Order:</h3>
    </div>
  );
}

export default Orders;
