const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const axios = require('axios');

require('dotenv').config()
const client_id = process.env.client_id;
const client_secret = process.env.client_secret;
let newToken;

const testAlbum = '7iLuHJkrb9KHPkMgddYigh';

// Middleware
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

// Calls
app.get('/albums', (req, res) => {
  axios({
    method: 'GET',
    url: `https://api.spotify.com/v1/albums/${testAlbum}/tracks`,
    headers: {
      Authorization: `Bearer ${newToken}`
    }
  }).then((response) => {
    res.send(response.data)
  }).catch((error) => {
    console.log('Error: ', error)
  })
})

app.post('/', (req, res) => {
  axios({
    method: 'POST',
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization: "Basic " + (new Buffer.from(client_id + ":" + client_secret).toString("base64")),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      grant_type: "client_credentials",
    },
    json: true,
  }).then((response) => {
    // console.log('Response in server.js: ', response.data.access_token)
    newToken = response.data.access_token;
    res.send(response.data)
  }).catch((error) => {
    console.log('Error: ', error)
  })
})

// Listen
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});