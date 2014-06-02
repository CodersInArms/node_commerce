var http = require('http');

var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.set('title', 'Angular E-commerce');

app.use(app.router);

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});

app.get('/', function(request, response){
    response.sendfile('public/index.html');
});

app.get('/index.html', function(request, response){
    response.setHeader("Location", "/");
});
