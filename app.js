require('dotenv').config()
const express = require('express');
const cors    = require('cors');
const db      = require('./config/db');

db.authenticate()
         .then(res => {
             console.log('Connection established');
         })
         .catch( error => {
             console.log('Error in connection to postgres db');
         });

const app = express();

const employeeRoutes = require('./routes/employeeRoutes');

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};
const PORT = process.env.PORT || 5000;
const { urlencoded } = require('express');

app.use(cors(corsOptions));
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use('/api', employeeRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});