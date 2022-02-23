//get the total price
const calculateTotal = (arr) => {
  return arr.map((car) => Number(car.price)).reduce((a, b) => a + b, 0);
};

export default calculateTotal;
