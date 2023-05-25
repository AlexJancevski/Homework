-- PART 1

SELECT *
FROM Employee
WHERE FirstName = 'Antonio'

SELECT * 
FROM Employee
WHERE DateOfBirth > '01.01.1979'

SELECT *
FROM Employee
WHERE gender = 'M'

SELECT *
FROM Employee
WHERE LastName LIKE 'T%'

SELECT *
FROM Employee
WHERE HireDate BETWEEN '1988-01-01' AND '1988-01-31'

SELECT *
FROM Employee
WHERE LastName LIKE 'J%'
AND HireDate BETWEEN '1988-01-01' AND '1988-01-31'

-- PART 2

SELECT *
FROM Employee
WHERE FirstName = 'Antonio'
ORDER BY LastName

SELECT *
FROM Employee
ORDER BY FirstName

SELECT *
FROM Employee
WHERE gender = 'M'
ORDER BY HireDate ASC

-- PART 3

SElECT region
FROM BusinessEntity
UNION ALL
SELECT regionname
FROM Customer

SELECT region
FROM BusinessEntity
UNION
SELECT regionname
FROM Customer

SELECT name
FROM BusinessEntity
INTERSECT
SELECT regionname
FROM Customer

-- PART 4

CREATE Table orders (
	id SERIAL PRIMARY KEY,
	orderdate date CHECK (orderdate >= '2010-01-01')
)

CREATE TABLE Product (
  id SERIAL PRIMARY KEY,
  description varchar(255),
  cost decimal(10, 2),
  price decimal(10, 2) CHECK (price >= (1.2 * cost)),

CREATE TABLE Products (
	id SERIAL PRIMARY KEY,
	description varchar(100) UNIQUE,
	price decimal(10, 2)
)
	
-- PART 5	

CREATE TABLE Customer (
  customerID SERIAL PRIMARY KEY,
  name VARCHAR(255)
)
	
CREATE TABLE Order (
  orderID SERIAL PRIMARY KEY,
  orderDate DATE,
  customerID INTEGER REFERENCES Customer (customerID)
)






