var http = require('http');
var fs = require("fs");

var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.set('title', 'Angular E-commerce');

app.use(app.router);

app.listen(5000);

app.get('/', function(request, response){
    response.sendfile('public/index.html');
});

app.get('/index.html', function(request, response){
    response.setHeader("Location", "/");
});

console.log("Listening at port 5000");
