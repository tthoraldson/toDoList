var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/omicron';

router.put('/:id', function (req, res){
  var task = req.params.id
  console.log(task);


  // UPDATE tasks SET complete = TRUE WHERE id = $1
  pg.connect(connectionString, function (err, client, done){
    if (err){
      res.sendStatus(500);
    }
    else {
      client.query('UPDATE tasks ' +
                    'SET complete = TRUE ' +
                    'WHERE id = ' + task + '',
                    function (err, result){
                      done();
                      if (err){
                        res.sendStatus(500);
                      }
                      else {
                        done();
                        res.sendStatus(200);
                      }
                    });
    }
  });
});

module.exports = router;
