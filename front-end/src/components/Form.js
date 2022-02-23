import { useState, useEffect } from "react";
function Form({ submitHandler, carInfo }) {
  const [car, setCar] = useState({
    vim: "",
    name: "",
    year: 2022,
    mileage: 0,
    description: "",
    color: "",
    image: "",
    price: 1000,
    rating: 5,
    featured: false,
  });
  useEffect(() => {
    if (carInfo) setCar(carInfo);
  }, [carInfo]);
  const handleTextChange = (e) => {
    if (e.target.id === "featured")
      setCar({ ...car, featured: e.target.checked });
    else setCar({ ...car, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    submitHandler(car);
  };
  return (
    <div className="form-add-edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="vim">Vim Number</label>
        <br />
        <input
          type="text"
          id="vim"
          value={car.vim}
          onChange={handleTextChange}
          placeholder="should be 17 long..."
          required
        />
        <hr />
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          id="name"
          value={car.name}
          onChange={handleTextChange}
          placeholder="make model"
          required
        />
        <hr />
        <label htmlFor="year">Year</label>
        <br />
        <input
          type="number"
          id="year"
          min="1970"
          value={car.year}
          onChange={handleTextChange}
          required
        />
        <hr />
        <label htmlFor="mileage">Mileage</label>
        <br />
        <input
          type="number"
          min="0"
          id="mileage"
          value={car.mileage}
          onChange={handleTextChange}
          required
        />
        <hr />
        <label htmlFor="description">Description</label>
        <br />
        <textarea
          id="description"
          value={car.description}
          onChange={handleTextChange}
          placeholder="Car description..."
        />

        <hr />
        <label htmlFor="color">Color</label>
        <br />
        <input
          type="text"
          id="color"
          value={car.color}
          onChange={handleTextChange}
        />
        <hr />
        <label htmlFor="image">Image</label>
        <br />
        <input
          type="text"
          id="image"
          value={car.image}
          onChange={handleTextChange}
          placeholder="https://"
        />
        <hr />
        <label htmlFor="price">Price</label>
        <br />
        <input
          type="number"
          min="1000"
          id="price"
          value={car.price}
          onChange={handleTextChange}
          required
        />
        <hr />
        <label htmlFor="rating">Rating</label>
        <br />
        <input
          type="number"
          min="0"
          max="5"
          id="rating"
          value={car.rating}
          onChange={handleTextChange}
        />
        <hr />
        <label htmlFor="featured">Featured</label>
        <br />
        <input
          type="checkbox"
          id="featured"
          checked={car.featured}
          onChange={handleTextChange}
        />
        <hr />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
