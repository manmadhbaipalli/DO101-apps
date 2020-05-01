const express = require('express');
const TEST = process.env.TEST;
const TEST1 = process.env.TEST1;
app = express();

var response;

app.get('/', function (req, res) {

    response = 'This is version 4 of the app.' + '\n' + TEST +"TEST1: "+TEST1;

    //send the response to the client
    res.send(response);

});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
  console.log('TEST'+TEST);
});
