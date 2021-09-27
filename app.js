if(process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}
const express = require('express');
const cors    = require('cors');
const db      = require('./config/db');
const morgan  = require('morgan');

db.authenticate()
         .then(res => {
             console.log('Connection established');
         })
         .catch( error => {
             console.log('Error in connection to postgres db');
         });

const app = express();

const employeeRoutes = require('./routes/employeeRoutes');


const PORT = 5000;
const { urlencoded } = require('express');

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(morgan('tiny'));

app.use('/api', employeeRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});