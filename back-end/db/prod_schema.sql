DROP TABLE IF EXISTS cars;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS roles;



--cars table
CREATE TABLE cars (
    id SERIAL PRIMARY KEY, 
    vim VARCHAR(17) NOT NULL,  -- vim should be length 17 and not null
    name VARCHAR(50) NOT NULL,
    description TEXT,
    price INT NOT NULL,
    rating NUMERIC, CHECK(rating>=0 AND rating<=5),
    featured BOOLEAN,
    image TEXT,
    color VARCHAR(20),
    year VARCHAR(4) NOT NULL,
    mileage INT NOT NULL
);

--reviews table
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewer VARCHAR(50),
    content TEXT,
    rev_rating NUMERIC,
    CHECK (rev_rating >= 0 AND rev_rating <= 5),
    car_id INTEGER REFERENCES cars (id)
    ON DELETE CASCADE
);

--users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    password VARCHAR(255) NOT NULL,
    UNIQUE(username,email)
);

--orders table
CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    car_id INTEGER,
    user_id INTEGER REFERENCES users(id)
    ON DELETE CASCADE
);

--roles table
CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    role VARCHAR(5) DEFAULT 'basic',
    user_id INTEGER REFERENCES users(id)
    ON DELETE CASCADE
);