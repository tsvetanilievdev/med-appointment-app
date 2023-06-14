require('dotenv').config();
require('./config/dbConfig');
const express = require('express');
const cors = require('./middlewares/cors');

const app = express();
const userController = require('./controllers/userController');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/user', userController);
app.listen(port, () => console.log(`Server is listening on port ${port}...`));
