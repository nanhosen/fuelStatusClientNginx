var express = require('express');
var path = require('path');
var app = express();

//https://expressjs.com/en/starter/static-files.html
// Define the port to run on
app.set('port', 3080);

// app.use(express.static(path.join(__dirname, 'build')));
app.use('/client', express.static('build'))
// app.use(express.static('build'))
//test

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
  console.log('app', app);
});

