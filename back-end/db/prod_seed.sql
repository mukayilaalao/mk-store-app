insert into cars (vim, name, description, price, rating, featured, image, color,year,mileage,status) 
values 
('JH4CL959X6C254207', 'Lamborghini Countach','The Lamborghini Countach is a rear mid-engine, rear-wheel-drive sports car produced by the Italian automobile manufacturer Lamborghini from 1974 until 1990. The style was introduced to the public in 1970 as the Lancia Stratos Zero concept car.', 56464, 5, true, 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F08%2F2022-lamborghini-countach-closer-look-details-photos-02-1.jpg', 'white',2021,1000,'available'),
  ('SCFFDABE3AG888346', 'Ford Explorer Sport Trac','The Ford Explorer Sport Trac (also shortened to Ford Sport Trac) is a pickup truck that was manufactured and marketed by Ford Motor Company for the North American market. The first mid-sized pickup truck produced by Ford, the Sport Trac was marketed from the 2001 to the 2010 model years', 69612, 5, false, 'https://www.carscoops.com/wp-content/uploads/webp/2020/10/Ford-Sport-Trac-Adrenalin-C.webp', 'red',2020,1700,'available'),
  ('1FTWF3D59AE922297', 'Audi A3','the Audi A3 is a good car. It has spry handling and a cushioned ride, and it offers three eager turbocharged engines, two of which come in high-performance models. The A3 interior looks great and incorporates plenty of high-end materials. It also has two rows of spacious seats and easy-to-use tech features', 50679, 5, false, 'https://www.motortrend.com/uploads/sites/5/2020/04/2021-Audi-A3-Sedan-front-three-quarter-in-motion.gif', 'black',2020,500,'available'),
  ('WAU3GBFC3DN301082', 'Toyota 4Runner','The 2022 Toyota 4Runner is a better off-roader than most other midsize SUVs, and it offers decent interior utility, with two rows of roomy seats and ample cargo capacity. It lags behind its classmates in a lot of other areas, however, including interior quality, ride comfort, and gas mileage.', 14184, 5, false, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2017-toyota-4runner-trd-off-road-4wd-1545164269.jpg', 'black',2022,0,'available'),
  ('JN1AZ4EH5DM472471', 'Nissan Quest','The 2017 Nissan Quest minivan offers an extensive list of family-friendly features ??? from its sophisticated styling with full surround glass that provides an airy, open interior environment to one-touch power sliding doors, quick release fold-flat 2nd and 3rd row seats, Advanced Climate Control System, and an always', 59871, 4, false, 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQiWQnC-huSZ7IvD3EcTfLExCnuoQHr-SkHiQpmSFRhyt7wwys','chocolate',2017,2055,'available'),
  ('WBAPH7G54AN907112', 'Ferrari 612 Scaglietti','The 612 Scaglietti is equipped with a 5.7-liter V12 that develops 540 horsepower at 7,250 rpm and 434 pound-feet of torque at 5,250 rpm. ... According to Ferrari, the 612 Scaglietti is capable of sprinting from zero to 60 mph in 4.2 seconds and hitting a top speed just shy of 200 mph.', 88978, 5, true, 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRkM8QhARSm08LHVqm0bZ4jpK4tGo0oTC_H0sFxDPa7PpWlXAmb', 'yellow',2020,1777,'available');

INSERT INTO reviews(car_id,reviewer, content,rev_rating) 
VALUES
(1,'Mk','My favorite car',5),
(1,'Jack','This car is nice but too expensive for me',5),
(3,'Leo','I will be there to get one of this car',5),
(2,'Baki','Just love this car, get it one day',5),
(6,'Sall','Famous one, this car, i love it.',5),
(5,'Poter','Best car ever',5),
(3,'Meriam','Joke, this is too expensive',4),
(1,'Nyan','My favorite car, i will have it!!!',5);

