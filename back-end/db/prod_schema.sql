DROP TABLE IF EXISTS cars;


CREATE TABLE cars (
    id SERIAL PRIMARY KEY, 
    vim VARCHAR(17) NOT NULL,
    name VARCHAR(50) NOT NULL,
    description TEXT,
    price INT NOT NULL,
    rating NUMERIC, CHECK(rating>=0 AND rating<=5),
    featured BOOLEAN,
    image TEXT,
    color VARCHAR(20)
);
