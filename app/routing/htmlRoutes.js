// require path so that this works right
var path = require("path");

// exports the app.get stuff
module.exports = function(app) {
    // gets the home.html file for default load
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // gets the survey file
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}