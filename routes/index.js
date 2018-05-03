var express = require('express');
var mysql = require("mysql2");
var router = express.Router();

var conn = mysql.createConnection({
  host: "",
  user: "root",
  password: "",
  database: "intro"
});

var data;

conn.query("SELECT * FROM me;", function(err, results, fields){
  if(err) throw err;
  data = results[0];
  // conn.end();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { data: data });
});


module.exports = router;
