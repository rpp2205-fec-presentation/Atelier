require("dotenv").config();
const axios = require('axios');
const express = require('express');

const logger = require("./middleware/logger");
const auth = require("./middleware/auth");

const app = express();
const port = process.env.PORT;

//app.use(express.json());
//app.use(express.urlencoded());

app.use(logger);
app.use(auth);
app.use(express.static(__dirname + '/../client/dist'));

app.all('*', (req, res, next) => {
  var endpoint = `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS_CODE}${req.url}`;

  axios({
    method: req.method,
    url: endpoint,
    data: req.body,
    headers: {Authorization: req.headers.Authorization}
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