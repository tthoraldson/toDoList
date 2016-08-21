var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/omicron';

router.post('/', function (req, res) {
  var task = req.body;
  console.log(req.body);

  pg.connect(connectionString, function (err, client, done) {
    if (err) {
      res.sendStatus(500);
    }
    else {
    client.query('INSERT INTO tasks (task, complete) '
                + 'VALUES ($1 , FALSE)',
                [task.task],
                function (err, result) {
                  done();

                  if (err) {
                    res.sendStatus(500);
                  }
                  else {
                    res.sendStatus(201);
                  }
                });
    }
  });
});

module.exports = router;
