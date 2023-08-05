const express = require('express');

//creating express application
const app = express()

//accessing environment variables
require('dotenv').config();

const cors = require("cors");

//importing routes
const moviesRoute = require('./routes/moviesRoute');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//getting port from .env if it is undefined set it to 8080
const PORT = process.env.PORT || 8080

//routes
app.use('/api', moviesRoute)
app.use('*', (req, res) => {
    res.status(404).json({"message" : "invalid route"})
})

app.listen(PORT, (err) => {
    if(err) console.log(err.message)
    console.log(`Server started on port - ${PORT}`)
})