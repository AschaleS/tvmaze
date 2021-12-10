const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());


let port = 4001;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});