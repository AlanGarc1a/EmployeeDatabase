const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employeeController');

router.get('/employee/', employeeController.getEmployees);

router.post('/employee/create', employeeController.createEmployee);

router.get('/employee/:id', employeeController.getEmployeeById);

router.put('/employee/update/:id', employeeController.updateEmployee);

router.delete('/employee/delete/:id', employeeController.deleteEmployee);

module.exports = router;