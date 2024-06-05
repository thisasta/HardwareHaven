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
    return result;
}

export async function getUsers() {
    const [result] = await pool.query(`SELECT * FROM users`);
    return result;
}

export async function newUser(firstName, lastName, email, password) {
    try {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);

        const [result] = await pool.query(
            'INSERT INTO users (firstname, lastname, email, password_hash) VALUES (?, ?, ?, ?)',
            [firstName, lastName, email, hashedPassword]
        );

        console.log('User created successfully');
        return result; // or any other value you want to return
    } catch (error) {
        console.error('Error creating user:', error);
        throw error; // or handle the error appropriately
    }
}


// const products = await getProducts();
// console.log(products);
//
// const newProduct = await createProduct('SAMSUNG 990 PRO 2 TB', 'Schnelle SSD', 37);
// console.log(newProduct);