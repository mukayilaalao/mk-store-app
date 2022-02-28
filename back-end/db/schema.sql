DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

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
    username VARCHAR(150) NOT NULL UNIQUE,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
