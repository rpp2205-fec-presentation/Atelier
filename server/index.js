require("dotenv").config();

const express = require('express');
const logger = require("./middleware/logger");
const auth = require("./middleware/auth");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded());

app.use(logger);
app.use(auth);

app.use(express.static(__dirname + '/../client/dist'));

app.all('*', (req, res, next) => {
  console.log('URL: ', req.url);
  console.log('METHOD:', req.method);
  res.send();
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})