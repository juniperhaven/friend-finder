var path = require("path");
var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        var html = "<h1>Possible Friends</h1>"

        for(var i = 0; i < friends.length; i++) {
            html += "<p>Name: "+friends[i].name+"</p>"
            html += "<img src = "+friends[i].photo+">"
        }

        res.send(html);
    });

    app.post("/api/friends", function(req, res) {
        var user = req.body;
        var userScores = user.scores;

        var friendName;
        var friendPic;
        var totalDiff = 50; // according to my calculations, if all I'm doing is taking all the potential-friend scores that aren't the same as the user scores, given that 5 is the highest value, 1 is the lowest value, and there's 10 questions, the highest possible difference is 40, but I'm not sure of my math, so I set it at 50, because honestly that should work fine.

        for(var i = 0; i < friends.length; i++) {
            var diff = 0;

            for(var j = 0; j < userScores.length; j++) {
                diff += Math.abs(friends[i].scores[j]-userScores[j]);
            }

            console.log(diff);

            if(diff < totalDiff) {
                friendName = friends[i].name;
                friendPic = friends[i].photo;
            }
        }

        friends.push(user);

        res.send({friendName, friendPic});
    });
}