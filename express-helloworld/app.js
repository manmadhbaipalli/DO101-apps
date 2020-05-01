var express = require('express');
const TEST = process.env.TEST;
const TEST1 = process.env.TEST1;
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n' +TEST +"TEST1:" + TEST1);
});

app.get('/manmadh', function (req, res) {
  res.send('Hello Manmadh!\n' +TEST);
});
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

