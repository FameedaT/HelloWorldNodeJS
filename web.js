var PORT = 8100;

var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var app = express();

app.use('/', function (req, res) {
    res.send("Hello world");
});

app.listen(PORT, function () {
    console.log("Application is running on http://localhost:" + PORT);
});