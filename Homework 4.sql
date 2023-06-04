-- Homework requirement 1/3

-- Calculate "(price + cost) / weight" for all products

SELECT ROUND(CEILING(cost) / FLOOR(price)) AS rounded_value
FROM products;

-- Generate a random number between 0 and 100 for every order

SELECT order_id, FLOOR(RAND() * 101) AS random_number
FROM orders;

-- Concatenate name, region, and zipcode with a delimiter ';' for every business entity

SELECT CONCAT(name, '; ', region, '; ', zipcode) AS concatenated_values
FROM business_entities;

-- Create a temporary table with LastName and HireDate columns, restricting dates after 01.01.2010

CREATE TEMPORARY TABLE temp_data (
  LastName VARCHAR(50),
  HireDate DATE CHECK (HireDate <= '2010-01-01')
);

-- Insert 5 rows of dummy data into the temporary table

INSERT INTO temp_data (LastName, HireDate)
VALUES
  ('Smith', '2009-07-15'),
  ('Johnson', '2008-11-23'),
  ('Williams', '2010-01-01'),
  ('Brown', '2007-05-10'),
  ('Davis', '2012-03-19');

-- Display every row inserted in the temporary table

SELECT *
FROM temp_data;

-- Homework requirement 2/3

CREATE FUNCTION get_employees_hired_later_than(hire_date_param date)
RETURNS TABLE (
  "Full name" varchar(100),
  "Age of employee on hiring" int,
  "National ID and Gender" varchar(50)
)
AS $$
BEGIN
  RETURN QUERY
  SELECT CONCAT(first_name, ' ', last_name) AS "Full name",
         EXTRACT(YEAR FROM AGE(hire_date, date_of_birth)) AS "Age of employee on hiring",
         CONCAT(national_id, '; ', gender) AS "National ID and Gender"
  FROM employees
  WHERE hire_date > hire_date_param;
END;
$$ LANGUAGE plpgsql;

-- Homework requirement 3/3

CREATE FUNCTION get_employee_orders(employee_id_param int)
RETURNS TABLE (
  "Product Details" varchar(200),
  "Quantity" int,
  "Business Entity" varchar(100)
)
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    LEFT(p.name, 3) || SUBSTRING(o.code FROM LENGTH(o.code)-2) || '; ' || p.description AS "Product Details",
    o.quantity AS "Quantity",
    b.name AS "Business Entity"
  FROM orders o
  INNER JOIN products p ON o.product_id = p.id
  INNER JOIN business_entities b ON o.business_entity_id = b.id
  WHERE o.employee_id = employee_id_param;
END;
$$ LANGUAGE plpgsql;