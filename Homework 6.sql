-- Homework 1/2

CREATE TABLE ProductHistory (
  id SERIAL,
  oldPrice real,
  oldCost real,
  newPrice real,
  newCost real,
  changedOn date,
  orderedOn date,
  orderedQuantity int
);


CREATE OR REPLACE FUNCTION product_update_trigger()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO ProductHistory (oldPrice, oldCost, newPrice, newCost, changedOn)
  VALUES (OLD.price, OLD.cost, NEW.price, NEW.cost, CURRENT_DATE);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;


CREATE TRIGGER product_update
AFTER UPDATE ON Product
FOR EACH ROW
EXECUTE FUNCTION product_update_trigger();


CREATE OR REPLACE FUNCTION order_details_insert_trigger()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO ProductHistory (newPrice, newCost, orderedOn, orderedQuantity)
  VALUES (NULL, NULL, CURRENT_DATE, NEW.quantity);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;


CREATE TRIGGER order_details_insert
AFTER INSERT ON OrderDetails
FOR EACH ROW
EXECUTE FUNCTION order_details_insert_trigger();

-- Homework 2/2

CREATE OR REPLACE PROCEDURE InsertOrder(
  IN businessEntityID INT,
  IN employeeID INT,
  IN productID INT,
  IN quantity INT
)
LANGUAGE plpgsql
AS $$
DECLARE
  orderID INT;
  orderPrice NUMERIC;
BEGIN
  INSERT INTO "Order" (businessEntityID, employeeID, orderDate, totalPrice, status)
  VALUES (businessEntityID, employeeID, CURRENT_DATE, 0, 0)
  RETURNING orderID, (SELECT price - cost FROM Product WHERE productID = productID)
  INTO orderID, orderPrice;
  
  
INSERT INTO OrderDetails (orderID, productID, quantity, price)
  VALUES (orderID, productID, quantity, orderPrice);
END;
$$;