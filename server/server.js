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

app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello Express");
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
