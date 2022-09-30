require("dotenv").config();

const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})