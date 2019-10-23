// import friends.js data and path thing
var path = require("path");
var friends = require("../data/friends");

// export the app.get and app.post things
module.exports = function(app) {
    // get the friends api, which prints out all the people in the friends array as html
    app.get("/api/friends", function(req, res) {
        var html = "<h1 id='text'>Possible Friends</h1>"
        html += "<a href='/'><button type='button'>Home</button></a>";

        for(var i = 0; i < friends.length; i++) {
            html += "<p id='text'>Name: " + friends[i].name + "</p>"
            html += "<img src = " + friends[i].photo + ">"
        }

        res.send(html);
    });

    // this takes your data from the survey and compares it to the data in the friends array to find your best match for a friend
    app.post("/api/friends", function(req, res) {
        var user = req.body;
        var userScores = user.scores;

        var friendName;
        var friendPic;
        var totalDiff = 50; // according to my calculations, if all I'm doing is taking all the potential-friend scores that aren't the same as the user scores, given that 5 is the highest value, 1 is the lowest value, and there's 10 questions, the highest possible difference is 40, but I'm not sure of my math, so I set it at 50, because honestly that should work fine.

        for(var i = 0; i < friends.length; i++) {
            var diff = 0;

            // I added this because presumably, if you enter yourself twice, you'll put in the same name and profile picture. this ensures that if your closest match would end up being yourself, you...won't match with yourself.
            // I did "same name and picture link" because I don't want to prevent two people matching if they happen to, say, have the same first name and only enter that first name.
            // it is true that if you enter a different name or a different profile picture but the same answers for yourself the second time around, you'll still match with yourself, but listen, I can't plan for everything, and at that point I feel like you're making a deliberate attempt to match with yourself anyway.
            if(user.name === friends[i].name && user.photo === friends[i].photo) {
                i++
            }
            else {
                for(var j = 0; j < userScores.length; j++) {
                    // math.abs to ensure that the difference always comes out to a positive number
                    diff += Math.abs(friends[i].scores[j] - userScores[j]);
                }

                // this checks for if the difference between you and the currently being checked person is less than the total difference
                // because if is then that makes them your current closest match
                // so if that's true, then the total diff now equals that number (ensuring any closer matches would of course need to be lower than the current closest match difference)
                // and the friend name and friend photo are set to that of whoever is currently being checked
                if(diff < totalDiff) {
                    totalDiff = diff;
                    friendName = friends[i].name;
                    friendPic = friends[i].photo;
                }
            }
        }
        
        // push the user to the friends array
        friends.push(user);

        // respond to the server with your new friend's name and picture!
        res.send({friendName, friendPic});
    });
}