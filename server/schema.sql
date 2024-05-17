DROP DATABASE IF EXISTS HardwareHaven;
-- Create the database
CREATE DATABASE HardwareHaven;
USE HardwareHaven;

-- Create Users table
CREATE TABLE Users
(
    user_id       INT AUTO_INCREMENT PRIMARY KEY,
    username      VARCHAR(50)  NOT NULL,
    email         VARCHAR(100) NOT NULL,
    password_hash VARCHAR(60)  NOT NULL,
    first_name    VARCHAR(50)  NOT NULL,
    last_name     VARCHAR(50)  NOT NULL,
    created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create UserAddresses table
CREATE TABLE UserAddresses
(
    address_id    INT AUTO_INCREMENT PRIMARY KEY,
    user_id       INT,
    address_line1 VARCHAR(100) NOT NULL,
    address_line2 VARCHAR(100),
    city          VARCHAR(50)  NOT NULL,
    state         VARCHAR(50)  NOT NULL,
    postal_code   VARCHAR(20)  NOT NULL,
    country       VARCHAR(50)  NOT NULL,
    created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users (user_id)
);

-- Create ProductGroups table
CREATE TABLE ProductGroups
(
    group_id    INT AUTO_INCREMENT PRIMARY KEY,
    group_name  VARCHAR(50) NOT NULL,
    description VARCHAR(255)
);

-- Create Products table
CREATE TABLE Products
(
    product_id   INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100)   NOT NULL,
    description  TEXT,
    price        DECIMAL(10, 2) NOT NULL,
    stock        INT            NOT NULL,
    group_id     INT,
    image_url    VARCHAR(255),
    created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (group_id) REFERENCES ProductGroups (group_id)
);

-- Create Orders table
CREATE TABLE Orders
(
    order_id   INT AUTO_INCREMENT PRIMARY KEY,
    user_id    INT,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status     VARCHAR(50)    NOT NULL,
    total      DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users (user_id)
);

-- Create OrderDetails table
CREATE TABLE OrderDetails
(
    order_detail_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id        INT,
    product_id      INT,
    quantity        INT            NOT NULL,
    price           DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES Orders (order_id),
    FOREIGN KEY (product_id) REFERENCES Products (product_id)
);

-- Create Reviews table
CREATE TABLE Reviews
(
    review_id  INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    user_id    INT,
    rating     INT NOT NULL,
    comment    TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES Products (product_id),
    FOREIGN KEY (user_id) REFERENCES Users (user_id)
);

-- Insert sample users with bcrypt hashed passwords
INSERT INTO Users (username, email, password_hash, first_name, last_name)
VALUES ('john_doe', 'john@example.com', '$2b$12$eImiTXuWVxfM37uY4JANjQ==', 'John', 'Doe'),
       ('jane_smith', 'jane@example.com', '$2b$12$abc123eImiTXuWVxfM37uY4JANjQ==', 'Jane', 'Smith'),
       ('alice_jones', 'alice@example.com', '$2b$12$xyz789eImiTXuWVxfM37uY4JANjQ==', 'Alice', 'Jones');

-- Insert sample user addresses
INSERT INTO UserAddresses (user_id, address_line1, address_line2, city, state, postal_code, country)
VALUES (1, '123 Main St', '', 'Anytown', 'Anystate', '12345', 'USA'),
       (2, '456 Elm St', 'Apt 2', 'Othertown', 'Otherstate', '67890', 'USA'),
       (3, '789 Oak St', 'Suite 100', 'Elsewhere', 'Elsestate', '11223', 'USA');

-- Insert product groups
INSERT INTO ProductGroups (group_name, description)
VALUES ('CPUs', 'Central Processing Units'),
       ('GPUs', 'Graphics Processing Units'),
       ('Motherboards', 'Various Motherboards'),
       ('Memory', 'RAM for computers'),
       ('Storage', 'SSDs and HDDs'),
       ('Power Supplies', 'Power Supply Units'),
       ('Cases', 'Computer Cases'),
       ('Cooling', 'Cooling Solutions for PCs');

-- Insert products with image URLs
INSERT INTO Products (product_name, description, price, stock, group_id, image_url)
VALUES ('Intel Core i9-11900K', '8-Core, 16-Thread, 3.5 GHz (5.3 GHz Turbo) CPU', 499.99, 50, 1,
        'https://example.com/images/intel_core_i9_11900k.jpg'),
       ('AMD Ryzen 9 5900X', '12-Core, 24-Thread, 3.7 GHz (4.8 GHz Turbo) CPU', 549.99, 45, 1,
        'https://example.com/images/amd_ryzen_9_5900x.jpg'),
       ('NVIDIA GeForce RTX 3080', '10GB GDDR6X, PCIe 4.0 Graphics Card', 699.99, 30, 2,
        'https://example.com/images/nvidia_geforce_rtx_3080.jpg'),
       ('AMD Radeon RX 6800 XT', '16GB GDDR6, PCIe 4.0 Graphics Card', 649.99, 35, 2,
        'https://example.com/images/amd_radeon_rx_6800_xt.jpg'),
       ('ASUS ROG Strix Z590-E', 'ATX, LGA 1200, DDR4 Motherboard', 349.99, 25, 3,
        'https://example.com/images/asus_rog_strix_z590_e.jpg'),
       ('MSI MPG B550 Gaming Edge', 'ATX, AM4, DDR4 Motherboard', 179.99, 40, 3,
        'https://example.com/images/msi_mpg_b550_gaming_edge.jpg'),
       ('Corsair Vengeance LPX 16GB', '2x8GB, DDR4, 3200MHz RAM', 89.99, 100, 4,
        'https://example.com/images/corsair_vengeance_lpx_16gb.jpg'),
       ('G.Skill Trident Z RGB 32GB', '2x16GB, DDR4, 3600MHz RAM', 199.99, 70, 4,
        'https://example.com/images/gskill_trident_z_rgb_32gb.jpg'),
       ('Samsung 970 EVO Plus 1TB', 'M.2 NVMe SSD', 149.99, 80, 5,
        'https://example.com/images/samsung_970_evo_plus_1tb.jpg'),
       ('WD Black 4TB', '3.5" SATA HDD', 119.99, 60, 5, 'https://example.com/images/wd_black_4tb.jpg'),
       ('Corsair RM850x', '850W, 80+ Gold, Fully Modular PSU', 129.99, 55, 6,
        'https://example.com/images/corsair_rm850x.jpg'),
       ('EVGA SuperNOVA 750 G5', '750W, 80+ Gold, Fully Modular PSU', 109.99, 65, 6,
        'https://example.com/images/evga_supernova_750_g5.jpg'),
       ('NZXT H510', 'Mid Tower ATX Case', 79.99, 90, 7, 'https://example.com/images/nzxt_h510.jpg'),
       ('Fractal Design Meshify C', 'Mid Tower ATX Case', 99.99, 85, 7,
        'https://example.com/images/fractal_design_meshify_c.jpg'),
       ('Noctua NH-D15', 'Dual Tower CPU Cooler', 89.99, 40, 8, 'https://example.com/images/noctua_nh_d15.jpg'),
       ('Corsair iCUE H150i', '360mm Liquid CPU Cooler', 159.99, 50, 8,
        'https://example.com/images/corsair_icue_h150i.jpg');

-- Insert orders
INSERT INTO Orders (user_id, order_date, status, total)
VALUES (1, '2023-05-01 10:15:00', 'Completed', 1149.97),
       (2, '2023-05-03 14:22:00', 'Processing', 699.99),
       (1, '2023-05-04 09:45:00', 'Shipped', 499.99),
       (3, '2023-05-06 16:30:00', 'Completed', 549.99);

-- Insert order details
INSERT INTO OrderDetails (order_id, product_id, quantity, price)
VALUES (1, 1, 1, 499.99),
       (1, 2, 1, 549.99),
       (1, 7, 1, 89.99),
       (2, 3, 1, 699.99),
       (3, 1, 1, 499.99),
       (4, 2, 1, 549.99);

-- Insert reviews
INSERT INTO Reviews (product_id, user_id, rating, comment)
VALUES (1, 1, 5, 'Fantastic CPU, great performance for gaming and productivity.'),
       (2, 2, 4, 'Very powerful processor, but runs a bit hot.'),
       (3, 3, 5, 'Amazing graphics card, handles everything I throw at it.'),
       (4, 1, 4, 'Great value for the performance, but driver issues at launch.');


-- Calculate the top 3 most bought products
SELECT * FROM users;
DELETE FROM users WHERE user_id = 5;