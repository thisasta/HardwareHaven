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
    FOREIGN KEY (productGroupID) REFERENCES productGroups (id)
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

INSERT INTO products (name, description, quantity, productGroupID)
VALUES ('GIGABYTE GeForce RTX 4070 WINDFORCE X3 OC', 'Schnelle Grafikkarte', 79, 1),
       ('AMD Ryzen 7 7800X3D', 'Schnelle CPU', 53, 2);