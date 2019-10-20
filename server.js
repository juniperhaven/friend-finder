// requires express and path
const express = require("express");
var path = require("path");

// set up for express
const app = express();
var PORT = process.env.PORT || 3000;

// set up for express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});