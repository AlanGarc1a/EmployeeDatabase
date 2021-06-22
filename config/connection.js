const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'QuickNEasy117?!',
    database: 'employees'
});

connection.connect( (error) => {
    if(error) {
        console.log('Error connecting...' + error.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;