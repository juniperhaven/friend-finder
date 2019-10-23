# friend-finder
This is a (fake) friend finding app that has a list of possible friends for a user to match with and a survey for the user to take in order to be matched with a friend. On loading the page, a header reading 'Friend Finder Home' will appear, along with two buttons labeled 'Friend Finder Survey' and 'Possible Friends'. The 'Possible Friends' button will take you to a list of the friends you could potentially match with, all of which are Steven Universe characters. The 'Friend Finder Survey' will take you to the survey that can match you with a friend, which has a fill-in-the-blank for your name, a link to an icon you'd like to use, and ten questions to determine which friend is the best match for you. At the bottom of the survey page is a space labeled 'Friend Match', where your new friend will appear once you have successfully taken the survey.

## Installation
Using Git Bash or Terminal, clone the code on to your computer using ```https://github.com/juniperhaven/friend-finder.git```. Navigate to the folder you downloaded the program to in Git Bash or Terminal and install the required Node packages by typing ```npm install``` in the console. Then, type ```node server.js``` into the console, and go to the URL that pops up at the end of the "Server listening at" message in the console. The server (and locally hosted webpage) will continue to run until you press control+c.

## Usage
To match with a friend, fill in the survey at the /survey page, seen here:

![survey](https://i.imgur.com/3BHYQu0.png)

And then hit the submit button at the bottom of the page.

To successfully submit a survey, you must enter something for your name, a valid http:// or https:// link that ends in either .png, .jpg, or .jpeg for the picture, and you must answer all 10 questions. If you don't, an alert will tell you what you didn't do.

After you have successfully submitted your survey, the survey will clear, and a picture of your friend match will appear, as seen here:

![friend](https://i.imgur.com/3SBHNwF.png)

## Link
https://intense-fortress-02392.herokuapp.com/

## Technologies Used
Express.js