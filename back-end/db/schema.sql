DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;


CREATE TABLE cars (
    id SERIAL PRIMARY KEY, 
    vim VARCHAR(50) NOT NULL,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price INT NOT NULL,
    rating NUMERIC, CHECK(rating>=0 AND rating<=5),
    featured BOOLEAN,
    image TEXT,
    color VARCHAR(50)
);
