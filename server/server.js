import mysql from 'mysql2'
import dotenv from 'dotenv'

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
    const [result] = await pool.query(`SELECT * FROM products WHERE id = ?`, [id]);
    return result;
}

export async function getTop() {
        const [result] = await pool.query(`SELECT * FROM products ORDER BY sold DESC LIMIT 3`);
        return result;
}

export async function createProduct(name, description, startingQuantity, productGroupID) {
    const [result] = await pool.query(`INSERT INTO products (name, description, quantity, productGroupID) VALUES (?, ?, ?, ?)`, [name, description, startingQuantity, productGroupID]);
    const id = result.insertId;
    return getProduct(id);
}

export async function search(name) {
    const [result] = await pool.query(`SELECT * FROM products WHERE name LIKE ?` [`%${name}%`]);
}

// const products = await getProducts();
// console.log(products);
//
// const newProduct = await createProduct('SAMSUNG 990 PRO 2 TB', 'Schnelle SSD', 37);
// console.log(newProduct);