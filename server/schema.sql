DROP DATABASE IF EXISTS HardwareHaven;
CREATE DATABASE HardwareHaven;
USE HardwareHaven;

CREATE TABLE productGroups
(
    id      integer primary key AUTO_INCREMENT,
    name    VARCHAR(255) NOT NULL,
    created TIMESTAMP    NOT NULL DEFAULT NOW()
);

CREATE TABLE products
(
    id             integer PRIMARY KEY AUTO_INCREMENT,
    name           VARCHAR(255) NOT NULL,
    description    TEXT         NOT NULL,
    quantity       integer,
    created        TIMESTAMP    NOT NULL DEFAULT NOW(),
    productGroupID integer,
    FOREIGN KEY (productGroupID) REFERENCES productGroups (id),
    sold           integer
);

INSERT INTO productGroups(name)
VALUES ('Grafikkarte'),
       ('CPU'),
       ('SSD'),
       ('HDD'),
       ('Mainboard'),
       ('Maus'),
       ('Tastatur'),
       ('Lüfter'),
       ('Kühler'),
       ('Laptops'),
       ('Gehäuse');

INSERT INTO products (name, description, quantity, productGroupID, sold)
VALUES ('GIGABYTE GeForce RTX 4070 WINDFORCE X3 OC', 'Fast Graphics Card', 79, 1, 10),
       ('AMD Ryzen 7 7800X3D', 'Fast CPU', 53, 2, 20),
       ('Samsung 980 PRO 2TB PCIe 4.0 NVMe M.2 SSD', 'High-speed SSD for blazing-fast storage', 40, 3, 8),
       ('Seagate BarraCuda 4TB 3.5" HDD', 'Large capacity hard drive for storage', 60, 4, 15),
       ('ASUS ROG Strix Z590-E Gaming WiFi 6E ATX Motherboard', 'Feature-packed motherboard for gaming enthusiasts', 25, 5, 5),
       ('Razer DeathAdder V2 Gaming Mouse', 'Ergonomic gaming mouse with high precision', 90, 6, 18),
       ('Corsair K70 RGB TKL Mechanical Gaming Keyboard', 'Compact mechanical keyboard with RGB lighting', 70, 7, 12),
       ('Noctua NH-D15 Chromax.Black Dual-Tower CPU Cooler', 'High-performance CPU cooler for overclocking', 30, 9, 6),
       ('MSI GE76 Raider 17" Gaming Laptop', 'Powerful gaming laptop with high refresh rate display', 15, 10, 3),
       ('NZXT H510 Compact ATX Mid-Tower Case', 'Stylish and functional PC case with ample cooling options', 50, 11, 10);

SELECT * FROM products ORDER BY sold DESC LIMIT 3;