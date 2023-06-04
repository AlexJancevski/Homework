-- Function using a row variable.

CREATE FUNCTION get_product_info_row(order_id_param int)
RETURNS products%ROWTYPE
AS $$
DECLARE
  product_row products%ROWTYPE;
BEGIN
  SELECT *
  INTO product_row
  FROM products
  WHERE id = (SELECT product_id FROM orders WHERE id = order_id_param);
  
  RETURN product_row;
END;
$$ LANGUAGE plpgsql;
 
-- Function using a record.

CREATE FUNCTION get_product_info_record(order_id_param int)
RETURNS RECORD
AS $$
DECLARE
  product_rec RECORD;
BEGIN
  SELECT *
  INTO product_rec
  FROM products
  WHERE id = (SELECT product_id FROM orders WHERE id = order_id_param);
  
  RETURN product_rec;
END;
$$ LANGUAGE plpgsql;

-- Function returning customers who bought a certain product.

CREATE FUNCTION get_customers_by_product(product_id_param int)
RETURNS TABLE (
  customer_id int,
  customer_name varchar(50),
  customer_email varchar(50),
  customer_address varchar(100)
)
AS $$
BEGIN
  RETURN QUERY
  SELECT
    c.id AS customer_id,
    c.name AS customer_name,
    c.email AS customer_email,
    c.address AS customer_address
  FROM customers c
  INNER JOIN orders o ON c.id = o.customer_id
  WHERE o.product_id = product_id_param;
END;
$$ LANGUAGE plpgsql;

-- Function returning quantity for a given order ID with a notice if quantity <= 50.

CREATE FUNCTION get_quantity(order_id_param int)
RETURNS int
AS $$
DECLARE
  quantity int;
BEGIN
  SELECT quantity
  INTO quantity
  FROM orders
  WHERE id = order_id_param;
  
  IF quantity > 50 THEN
    RETURN quantity;
  ELSE
    RAISE NOTICE 'Quantity is less than or equal to 50.';
    RETURN NULL;
  END IF;
END;
$$ LANGUAGE plpgsql;

-- Function returning customers who bought a certain product, filtering by name starting with a vowel.

CREATE FUNCTION get_customers_by_product_vowel(product_id_param int)
RETURNS TABLE (
  customer_id int,
  customer_name varchar(50),
  customer_email varchar(50),
  customer_address varchar(100)
)
AS $$
BEGIN
  RETURN QUERY
  SELECT
    c.id AS customer_id,
    c.name AS customer_name,
    c.email AS customer_email,
    c.address AS customer_address
  FROM customers c
  INNER JOIN orders o ON c.id = o.customer_id
  WHERE o.product_id = product_id_param
    AND c.name ILIKE 'a%' OR c.name ILIKE 'e%' OR c.name ILIKE 'i%' OR c.name ILIKE 'o%' OR c.name ILIKE 'u%';
  
  IF NOT FOUND THEN
    RAISE NOTICE 'No customers found with names starting with a vowel.';
  END IF;
END;
$$ LANGUAGE plpgsql;