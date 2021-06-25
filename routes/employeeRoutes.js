const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employeeController');

/* 
*   /api/create
*    post:
*       summary: inserts a new user to the mysql database
*    
*   /api/
*   get:
*     summary: get all employees from the mysql database        
*    
*  
*/
router.get('/', employeeController.getEmployees);

router.post('/create', employeeController.createEmployee);

router.get('/:id', employeeController.getEmployeeById);

router.put('/update/:id', employeeController.updateEmployee);

module.exports = router;