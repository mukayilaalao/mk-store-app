function ShoppingCart({ cart, removeFromTheCart }) {
  //get the total price
  const calculateTotal = (arr) => {
    return arr.map((car) => Number(car.price)).reduce((a, b) => a + b, 0);
  };
  //add $ sign
  const formatPrice = (nbr) => {
    return nbr.toFixed(2);
  };
  //format in money format
  const formatting = (str) => {
    //if number type, convert to string
    if (typeof str === "number") str = str.toString();
    //if comma included return the str
    if (str.includes(",")) return `$${str}`;
    //to keep track negative number
    const isNegative = str.includes("-");
    if (isNegative) str = str.slice(1);
    //keep track decimal number
    const isfloatNum = str.includes(".");
    if (str.split(".")[0].length >= 4) {
      if (isfloatNum) {
        const decArr = str.split(".");
        str = decArr[0];
        var decPart = decArr[1];
      }
      const newStr = str.split("").reverse().join("");
      const newArr = newStr.match(/\d{3}/g) || [];
      const revStr = newArr.join("");
      const returnVal = (newArr.join(",") + "," + newStr.slice(revStr.length))
        .split("")
        .reverse()
        .join("");
      let formatVal = returnVal[0] === "," ? returnVal.slice(1) : returnVal;
      formatVal = isfloatNum ? formatVal + "." + decPart : formatVal;
      return isNegative ? "-$" + formatVal : "$" + formatVal;
    }
    return isNegative ? "-$" + str : "$" + str;
  };
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
          <button>Pay Now</button>
        </section>
      ) : (
        ""
      )}
    </div>
  );
}

export default ShoppingCart;
