CREATE TABLE products(
    productId INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    stock_quantity INT NOT NULL CHECK(stock_quantity >= 0)
);

CREATE TABLE orders(
    orderId INT PRIMARY KEY AUTO_INCREMENT,
    order_date DATE NOT NULL,
    status VARCHAR(20) NOT NULL
);

CREATE TABLE order_items(
    order_id INT,
    product_id INT,
    quantity INT NOT NULL,
    unit_price DECIMAL(10,2) NOT NULL,
    PRIMARY KEY(order_id, product_id),
    Foreign Key (order_id) REFERENCES orders(orderId),
    Foreign Key (product_id) REFERENCES products(productId)
);

INSERT INTO products (name, category, stock_quantity) VALUES
('Laptop', 'Electronics', 10),
('Mouse', 'Electronics', 50),
('Desk Chair', 'Furniture', 20),
('Notebook', 'Stationery', 100);

INSERT INTO orders (order_date, status) VALUES
('2026-03-01', 'Completed'),
('2026-03-02', 'Completed'),
('2026-03-03', 'Pending');

INSERT INTO order_items (order_id, product_id, quantity, unit_price) VALUES
(1, 1, 1, 1000),
(1, 2, 2, 25),
(2, 3, 1, 150),
(2, 4, 5, 5),
(3, 2, 3, 25);


ALTER TABLE products
ADD discount DECIMAL(4,2);

SELECT oi.order_id, SUM(oi.quantity * oi.unit_price)
FROM orders o INNER JOIN order_items oi
ON o.orderId = oi.order_id
GROUP BY o.orderId;

