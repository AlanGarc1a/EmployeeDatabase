const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employeeController');

/* 
*   /api/create
*    post:
*       summary: inserts a new user to the mysql database
*/
router.post('/create', employeeController.createEmployee);

module.exports = router;