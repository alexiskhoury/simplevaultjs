var dbase = require('./dbase.js');
var express = require('express');
const port = process.env.port || 5000;

var app = express();
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.engine('html', require('consolidate').underscore);

app.get('/', function(req, res) {
  //res.render('test.html', {title: 'test page', data: msg});
  dbase.select_all(req, res);
});

app.get('/index.html', function(req, res) {
  dbase.select_all(req, res);
});

app.get('/find.html', function(req, res) {
  dbase.find_rec(req, res);
});

app.get('/findcat.html', function(req, res) {
  dbase.find_cat(req, res);
});

app.get('/decrypt.html', function(req, res) {
  dbase.decrypt_rec(req, res);
});

app.get('/delete.html', function(req, res) {
  dbase.delete_rec(req, res);
});

app.get('/modify.html', function(req, res) {
  dbase.modify_rec(req, res);
});

app.get('/save.html', function(req, res) {
  dbase.save_rec(req, res);
});

app.get('/new.html', function(req, res) {
  dbase.new_rec(req, res);
});

app.get('/tools.html', function(req, res) {
  dbase.tools(req, res);
});

//-- start server
var server = app.listen(port, function() {
  console.log('server listening at port ' + port + '...');
});
