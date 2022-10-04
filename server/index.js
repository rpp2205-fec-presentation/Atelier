require("dotenv").config();
const axios = require('axios');
const express = require('express');
const AUTH_TOKEN = require('../config.js');

const logger = require("./middleware/logger");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded());

app.use(logger);
app.use(express.static(__dirname + '/../client/dist'));

app.all('*', (req, res, next) => {
  var endpoint = `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS_CODE}${req.url}`;

  axios({
    method: req.method,
    url: endpoint,
    data: req.body,
    headers: {Authorization: AUTH_TOKEN}
  })
  .then(result => {
    res.send(result.data);
  })
  .catch(err => {
    res.send(err);
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});