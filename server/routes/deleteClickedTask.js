var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/omicron';

router.delete('/:id', function (req, res){
  pg.connect(connectionString, function(err, client, done){
    var id = req.params.id;

    if (err){
      res.sendStatus(500);
    }

      client.query('DELETE FROM tasks ' +
                    'WHERE id = $1',
                    [id],
                    function(err, result){
                      done();
                      if(err){
                        res.sendStatus(500);
                        return;
                      }
                      res.sendStatus(200);
                    });

  });
});


module.exports = router;
