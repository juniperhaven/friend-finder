// requires express and path
var express = require("express");
var path = require("path");

// set up for express
var app = express();
var PORT = process.env.PORT || 3000;

// set up for express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});