# EmployeeDatabase

A web application where a user can create, edit, update, and delete an employee from a database. This project
was built to understand how to use MySQL with modern technologies such as React.js.

# Motivation

Creating a full stack application using MySQL as the database and Node.js to communicate with it.

# Installation 

To run the application you will need to:

* Clone the repository locally

```
    https://github.com/AlanGarc1a/EmployeeDatabase.git
```

* Create a ```.env``` file and store all database connection information or any other environment variables that will change

* Install dependencies for both client and server using ```npm install``

# Project Structure

```
    client

📦src                     // entry point for the React application
 ┣ 📂components
 ┃ ┣ 📂employee
 ┃ ┃ ┣ 📜EmployeeCreate.js
 ┃ ┃ ┣ 📜EmployeeEdit.js
 ┃ ┃ ┣ 📜EmployeeList.js
 ┃ ┃ ┗ 📜EmployeeView.js
 ┃ ┣ 📜App.js
 ┃ ┣ 📜Home.js
 ┃ ┗ 📜Menu.js
 ┗ 📜index.js

 server

 app.js                     // entry point for running the backend server

 📦config                   // configuration folder for any modules
 ┗ 📜connection.js
     
 📦controllers             // controllers for routes
 ┗ 📜employeeController.js

 📦routes                  // routes folder for all routes
 ┗ 📜employeeRoutes.js      

```

# Technologies

* React.js - Javascript library for building user interfaces
* Node.js - For back end API services
* Bootstrap - styling library
* mysql2 - module to connect to MySQL
* MySQL - Database
* axios - http requests