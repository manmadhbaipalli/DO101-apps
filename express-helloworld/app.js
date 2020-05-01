var express = require('express');
const TEST = process.env.TEST;
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n' +TEST);
});

app.get('/manmadh', function (req, res) {
  res.send('Hello Manmadh!\n' +TEST);
});
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

