# EmployeeDatabase

A web application where a user can create, edit, update, and delete an employee from a database.

# Motivation

Create a web application using PostgresSQL as the database and Node.js to communicate with it.

# Technologies
Front end
 * React.js
 * Bootstrap 4
 * axios 

Back end
 * Node.js
 * PostgresSQL


# Entity Relational Diagram
![image](https://user-images.githubusercontent.com/32556354/133638745-8c97d441-bb92-41a5-9d9e-c8510ff976f8.png)


# Installation 

To run the application you will need to:

* Clone the repository locally

```
    https://github.com/AlanGarc1a/EmployeeDatabase.git
```

* Create a ```.env``` file and store all your environment variables there.

```
$ cd client
$ npm install
$ cd ..
$ npm install
```

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