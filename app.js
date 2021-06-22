const express = require('express');
const cors    = require('cors');

const app = express();

const PORT = 5000;
const corsOptions = {
    origin: 'http://localhost:5000',
    optionsSuccessStatus: 200
};
const { urlencoded } = require('express');

app.use(cors(corsOptions));
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});