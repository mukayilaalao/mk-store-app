const db = require("../db/dbConfig.js");

//get a specific user orders
const getAllOrders = async (user_id) => {
  try {
    const orders = await db.any(
      "SELECT * FROM orders WHERE user_id=$1",
      user_id
    );
    return orders;
  } catch (error) {
    return error;
  }
};

//get a single order
const getOrder = async (order_id) => {
  try {
    const order = await db.one("SELECT * FROM orders WHERE id=$1", order_id);
    return order;
  } catch (error) {
    return error;
  }
};

//delete a order
const deleteOrder = async (order_id) => {
  try {
    const deletedOrder = await db.one(
      "DELETE FROM orders WHERE id=$1 RETURNING *",
      order_id
    );
    return deletedOrder;
  } catch (error) {
    return error;
  }
};

//create a Order
const createOrder = async (user_id, order) => {
  try {
    const createdOrder = await db.one(
      "INSERT INTO orders(user_id,car_id) VALUES($1,$2) RETURNING *",
      [user_id, order.car_id]
    );
    return createdOrder;
  } catch (error) {
    return error;
  }
};
module.exports = {
  createOrder,
  deleteOrder,
  getOrder,
  getAllOrders,
};
