const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',          // your MySQL username
    password: process.env.DATABASE_PWD,  // your MySQL password
    database: process.env.DATABASE_NAME
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
});

module.exports = db.promise();