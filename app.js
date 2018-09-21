var express                    = require('express');
var session                    = require('express-session');
var SessionStore               = require('express-mysql-session');
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




app.listen(80, (err) => {
		if (err) return console.log("Ошибка запуска сервера:" + err.message);
		console.log('Проект запущен на '+80+' порт');
});
