var express =  require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// REQUIRE ROUTES
var uncompletedTasks = require('./routes/uncompletedTasks');
var completedTasks = require('./routes/completedTasks');

app.use(bodyParser.urlencoded({ extended: true }));

// USE ROUTES
app.use('/uncompletedTasks', uncompletedTasks);
app.use('/completedTasks', completedTasks);


// Catchall route
app.get('/*', function (req, res) {
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, './public', file));
});

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
  console.log('Listening on port ', app.get('port'));
});
