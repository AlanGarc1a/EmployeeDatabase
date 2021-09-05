const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
});

connection.connect( (error) => {
    if(error) {
        console.log('Error connecting...' + error.stack);
        return;
    }
});

module.exports = connection;