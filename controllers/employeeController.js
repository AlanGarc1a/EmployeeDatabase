/* 
*   retrieve the connection to the mysql database
*/
const connection = require('../config/connection');

/* 
*   Object controller for employee routes
*
*   @getEmployees: gets all employees from the mysql database
*   @createEmployee: adds a new employee to the mysql database
*   @getEmployeeById: get an employee with the matching id from the database
*
*/
module.exports = {

    getEmployees: (req, res) => {
        const ALL_EMPLOYEES_QUERY = `SELECT * FROM employee`;

        connection.query(ALL_EMPLOYEES_QUERY, (err, results) => {
            if(err) {
                console.log(err);
            }
            else {
                res.status(200).json(results);
            }
        });
    },
    createEmployee: (req, res) => {
        const { firstName, lastName, age, gender, birthday, job } = req.body;

        const INSERT_EMPLOYEE_QUERY = `INSERT INTO employee(first_name, last_name, age, gender, birthday, job) VALUES(?, ?, ?, ?, ?, ?)`;

        connection.query(INSERT_EMPLOYEE_QUERY, [firstName, lastName, age, gender, birthday, job], (err, results) => {
            console.log(results);
        });

        res.status(200).json({msg: "Created employee"});
    },
    getEmployeeById: (req, res) => {
        const { id } = req.params;

        const EMPLOYEE_QUERY = `SELECT first_name, last_name, age, gender, birthday, job FROM employee WHERE id = ${id}`;

        connection.query(EMPLOYEE_QUERY, (err, results) => {
            if(err) {
                console.log(err);
            }
            
            res.status(200).json(results[0]);
        });
    }
}