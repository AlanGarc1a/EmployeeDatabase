const Employee = require('./employee');
const Department = require('./department');
const Project = require('./project');

Department.Employee = Department.hasMany(Employee, { as: 'employee' });
Employee.Department = Employee.belongsTo(Department, { as: 'department' });

Project.Employee = Project.hasMany(Employee, { as: 'employee' });
Employee.Project = Employee.belongsTo(Project, { as: 'project' });

module.exports = { Employee, Department, Project };