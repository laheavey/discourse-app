const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const axios = require('axios');
require('dotenv').config()

// Middleware
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

// Calls


// Listen
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});