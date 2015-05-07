var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});


// will match requests to /about
app.get('/about', function (req, res) {
  res.send('about');
});

// accept POST request on the homepage
app.post('/', function (req, res) {
  res.send('Got a POST request');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
