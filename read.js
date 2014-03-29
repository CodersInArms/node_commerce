var http = require('http');
var fs = require("fs");

var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.use(app.router);
app.get('/', function(request, response){
    response.send("Hey!");
});

app.listen(1337);

console.log("Listening at port 1337");