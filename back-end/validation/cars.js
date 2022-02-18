const checkName = (req, res, next) => {
  const { name } = req.body;
  if (name) next();
  else res.status(422).json({ success: false, result: "Name is required" });
};
const checkVim = (req, res, next) => {
  const { vim } = req.body;
  if (vim && vim.length === 17) next();
  else
    res.status(422).json({
      success: false,
      result: "Vim number is required and should be length of 17",
    });
};
const checkPrice = (req, res, next) => {
  const { price } = req.body;
  if (!isNaN(price)) next();
  else
    res.status(422).json({
      success: false,
      result: "Price is required and should be a number!",
    });
};
const capitalizedName = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((el) => (el.length > 2 ? el[0].toUpperCase() + el.slice(1) : el))
    .join(" ");
};
const addDefaultImage = (car) => {
  if (!car.image) {
    car = {
      ...car,
      image: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg",
    };
  }
  return car;
};

module.exports = {
  capitalizedName,
  checkPrice,
  checkVim,
  checkName,
  addDefaultImage,
};
