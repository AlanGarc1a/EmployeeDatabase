/* 
*   retrieve the connection to the mysql database
*/
const connection = require('../config/connection');

/* 
*   Object controller to export for employee routes
*
*   @createEmployee: adds a new employee to the mysql database
*
*/
module.exports = {
    createEmployee: (req, res) => {
        console.log(req.body);
        res.status(200).json({msg: "Created employee"});
    }

}