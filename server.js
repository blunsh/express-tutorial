var express = require('express')
  , app = express()
  , port = process.env.PORT || 3000

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello, World!')
})


// will match requests to /about
app.get('/about', function (req, res) {
  res.json({a:'about'});
});

app.listen(port, function () {
  console.log('Listening on port ', port)
})

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});