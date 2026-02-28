CREATE TABLE products(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    category VARCHAR(255) NOT NULL,
    price INT NOT NULL CHECK(price > 0),
    stock_quantity INT CHECK(stock_quantity >= 0),
    date_added DATE
);

CREATE TABLE sales(
    sale_id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT NOT NULL,
    quantity_sold INT NOT NULL,
    sale_date DATE
);

INSERT INTO products (name, category, price, stock_quantity, date_added) VALUES
('Laptop', 'Electronics', 15000, 10, '2026-02-01'),
('Phone', 'Electronics', 8000, 25, '2026-02-05'),
('Chair', 'Furniture', 1200, 50, '2026-02-10'),
('Book', 'Stationery', 150, 100, '2026-02-15');

INSERT INTO sales (product_id, quantity_sold, sale_date) VALUES
(1, 2, '2026-02-16'),
(2, 5, '2026-02-17'),
(3, 3, '2026-02-18'),
(4, 10, '2026-02-19');

--TASK 1
SELECT name, price
FROM products
WHERE category = 'Electronics'
ORDER BY price DESC
LIMIT 3;

--TASK 2
SELECT category, COUNT(*), AVG(price), SUM(price * stock_quantity)
FROM products
GROUP BY category
HAVING COUNT(*) > 5;

--TASK 3
SELECT UPPER(name), SUBSTRING(name, 1, 10) AS short_desc, DATEDIFF(NOW(), date_added)
FROM products

--TASK 4
ALTER TABLE products
ADD discount_rate DECIMAL(4,3);

UPDATE products 
SET discount_rate = 0.1 
WHERE category = 'Electronics';

DELETE FROM products
WHERE stock_quantity = 0;

DROP TABLE sales;