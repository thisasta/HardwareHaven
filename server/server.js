import mysql from 'mysql2'
import dotenv from 'dotenv'
import bcrypt from "bcrypt";

dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export async function getProducts() {
    const [result] = await pool.query("SELECT * FROM products");
    return result;
}

export async function getProduct(id) {
    const [result] = await pool.query(`SELECT * FROM products WHERE product_id = ?`, [id]);
    return result;
}

export async function getTop() {
        const [result] = await pool.query(`SELECT p.product_id, p.product_name, SUM(od.quantity) AS total_quantity FROM OrderDetails od JOIN Products p ON od.product_id = p.product_id GROUP BY p.product_id, p.product_name ORDER BY total_quantity DESC LIMIT 3;`);
        return result;
}

export async function createProduct(name, description, startingQuantity, productGroupID, image_url, price) {
    const [result] = await pool.query(`INSERT INTO products (product_name, description, stock, group_id, image_url, price) VALUES (?, ?, ?, ?)`, [name, description, startingQuantity, productGroupID, image_url, price]);
    const id = result.insertId;
    return getProduct(id);
}

export async function search(name) {
    const [result] = await pool.query(`SELECT * FROM products WHERE product_name LIKE ?`, [`%${name}%`]);
    return result;
}

export async function newUser(first_name, last_name, username, email, password) {
    const [result] = await pool.query(`INSERT INTO users (first_name, last_name, username, email, password_hash) VALUES (?, ?, ?, ?, ?)`, [first_name, last_name, username, email, password]);
    return await pool.query(`SELECT * FROM users WHERE email LIKE ?`, [`${email}`]);
}


// const products = await getProducts();
// console.log(products);
//
// const newProduct = await createProduct('SAMSUNG 990 PRO 2 TB', 'Schnelle SSD', 37);
// console.log(newProduct);