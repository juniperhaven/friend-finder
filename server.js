// requires express and path
var express = require("express");
var path = require("path");

// set up for express
var app = express();
var PORT = process.env.PORT || 3000;

// set up for express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());