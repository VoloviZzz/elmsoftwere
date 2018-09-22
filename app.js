var express                    = require('express');
var session                    = require('express-session');
var SessionStore               = require('express-mysql-session');
var bodyParser                 = require('body-parser');
var http                       = require('http');
var connect                    = require('connect');
var path                       = require('path');
var app                        = express();

app.engine('ejs', require('ejs-locals'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/client'));


app.get('/', function (req, res, next) {

  res.render('index');

});

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'app',
  password : '1234567',
  database : 'elmsoftware'
});

// connection.connect();
app.use('/email', bodyParser.urlencoded({
    extended: true
}));

app.post('/email', function(req, res, next) {
  console.log(req.body);
  connection.query('insert into landing set email = "'+req.body.email+'"', function (error, results, fields) {
    if (error) throw error;
    console.log('__________results');
  });

  res.send({status: 'ok', text: 'req'});
});


// connection.end();

app.listen(80, (err) => {
		if (err) return console.log("Ошибка запуска сервера:" + err.message);
		console.log('Проект запущен на '+80+' порт');
});
