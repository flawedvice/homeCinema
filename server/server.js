require('dotenv').config();
const express = require('express');
const app = express();


/* || Database Connection */
const connectDB = require('./config/mongodb');
connectDB();


/* || Middlewares */

// Enable CORS requests
const cors = require('cors');
app.use(cors());

// Enable JSON responses
app.use(express.json());

// Get body from requests
app.use(express.urlencoded({ extended: true }))


/* || Routes */
const router = require('./routes/cinema');
app.use(router);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
