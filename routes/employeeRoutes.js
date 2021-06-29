const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employeeController');

/*      
*    
*
*  
*/
router.get('/', employeeController.getEmployees);

router.post('/create', employeeController.createEmployee);

router.get('/:id', employeeController.getEmployeeById);

router.put('/update/:id', employeeController.updateEmployee);

router.delete('/delete/:id', employeeController.deleteEmployee);

module.exports = router;