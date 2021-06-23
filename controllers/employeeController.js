/* 
*   retrieve the connection to the mysql database
*/
const connection = require('../config/connection');

/* 
*   Object controller for employee routes
*
*   @createEmployee: adds a new employee to the mysql database
*
*/
module.exports = {
    createEmployee: (req, res) => {
        const { firstName, lastName, age, gender, birthday, job } = req.body;

        const INSERT_EMPLOYEE_QUERY = `INSERT INTO employee(first_name, last_name, age, gender, birthday, job) VALUES(?, ?, ?, ?, ?, ?)`;

        connection.query(INSERT_EMPLOYEE_QUERY, [firstName, lastName, age, gender, birthday, job], function(err, results){
            console.log(results);
        });

        res.status(200).json({msg: "Created employee"});
    }

}