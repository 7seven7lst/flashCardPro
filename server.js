var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var Q = require('q');
var port = 3210;
mongoose.connect('mongodb://localhost/flashcard');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('connected to Mongo DB');
});


var cardSchema = new mongoose.Schema({
  front: {
    type: String,
    default: ''
  },
  back: {
    type: String,
    default: ''
  },
  rank: {
    type: Number,
    default: 0
  }
});

var Card = mongoose.model('Card', cardSchema);
/*
var test1 = new Card({front:'closure', back:'closure', rank:0});
test1.save(function(err,result) {
  if (err) {
    return console.error(err);
  }
  console.log(result, 'has been saved');
});
var test2 = new Card({front:'promises', back:'promises', rank:0});
test2.save(function(err,result) {
  if (err) {
    return console.error(err);
  }
  console.log(result, 'has been saved');
});
*/



//set dirname to client folder to serve static assets (index.html)
app.use('/', express.static(__dirname + '/client'));

//parses all incoming data from strings to JSON
app.use(bodyParser.json());

app.get('/home', function(req, res){
  res.end(); 
});

app.get('/api/javascript', function(req, res){
  Card.find(function(err,result) {
    if (err) return console.error(err);
    console.log(result);
    res.json(result);
  })
});

app.get('*/', function(req, res){
  res.redirect('/home');
});

app.listen(port, function() {
  console.log("Listening on port " + port + "...");
});

