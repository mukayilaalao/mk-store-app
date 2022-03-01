const express = require("express");
const orders = express.Router({ mergeParams: true });
const {
  createOrder,
  deleteOrder,
  getOrder,
  getAllOrders,
} = require("../queries/orders.js");
//get all orders
orders.get("/", async (req, res) => {
  const { user_id } = req.params;
  const orders = await getAllOrders(user_id);
  if (orders[0]) res.json({ success: true, result: orders });
  else res.redirect("/*");
});
//get a single order
orders.get("/:order_id", async (req, res) => {
  const { order_id } = req.params;
  const order = await getOrder(order_id);
  if (order.id) res.json({ success: true, result: order });
  else res.redirect("/*");
});

//delete a order
orders.delete("/:order_id", async (req, res) => {
  const { order_id } = req.params;
  const deletedOrder = await deleteOrder(order_id);
  if (deletedOrder.id) res.json({ success: true, result: deletedOrder });
  else res.redirect("/*");
});
//create a order
orders.post("/", async (req, res) => {
  const { user_id } = req.params;
  const order = req.body;
  const createdOrder = await createOrder(user_id, order);
  if (createdOrder.id) res.json({ success: true, result: createdOrder });
  else res.redirect("/*");
});

module.exports = orders;
