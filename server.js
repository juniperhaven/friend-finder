// requires express and path
var express = require("express");
var path = require("path");

// set up for express
var app = express();
var PORT = process.env.PORT || 3000;

// set up for express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require the app.get and app.post stuff from the routing files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// console.log the port the server is listening on
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});