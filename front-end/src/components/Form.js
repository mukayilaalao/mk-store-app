import { useState, useEffect } from "react";
function Form({ handleSubmit, car }) {
  const [car, setCar] = useState({
    vim: "",
    name: "",
    description: "",
    color: "",
    image: "",
    price: null,
    rating: 5,
    featured: false,
  });
  if (car) setCar(car);
  const handleTextChange = (e) => {
    if (e.target.id === "featured")
      setCar({ ...car, featured: e.target.checked });
    else setCar({ ...car, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmit(car);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="vim">Vim</label>
        <br />
        <input
          type="text"
          id="vim"
          value={car.vim}
          onChange={handleTextChange}
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
          required
        />
        <hr />
        <label htmlFor="description">Description</label>
        <br />
        <textarea
          id="description"
          onChange={handleTextChange}
          placeholder="Car description..."
        >
          {car.description}
        </textarea>
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
          id="price"
          value={car.price}
          onChange={handleTextChange}
          required
        />
        <hr />
        <label htmlFor="rating">Rating</label>
        <br />
        <input
          type="range"
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
          checked={checked}
          onChange={handleTextChange}
        />
        <hr />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
