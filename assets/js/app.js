var computerChoices = ["r","p","s"];

var wins = 0;
var losses = 0;
var ties = 0;

var instructionHtml = 
    "<h1 class=\"display-4 text-center\">RPS-v2</h1>" +
    "<p class=\"lead text-center\">This is a single player game</p>" +
    "<p class=\"text-center\">Please press r, p, or s to begin!</p>";


document.querySelector("#instructionsAndScore").innerHTML = instructionHtml;

    document.onkeyup = function(event){

        var userGuess  = event.key;

        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

            if ((userGuess === "r") && (computerGuess === "s")) {
            wins++;
            } else if ((userGuess === "r") && (computerGuess === "p")) {
            losses++;
            } else if ((userGuess === "s") && (computerGuess === "r")) {
            losses++;
            } else if ((userGuess === "s") && (computerGuess === "p")) {
            wins++;
            } else if ((userGuess === "p") && (computerGuess === "r")) {
            wins++;
            } else if ((userGuess === "p") && (computerGuess === "s")) {
            losses++;
            } else if (userGuess === computerGuess) {
            ties++;
            }

                
        var dynImage = '<img src="';
        
        if (userGuess === "r"){
            dynImage += 'https://vignette.wikia.nocookie.net/yandere-simulator-fanon/images/4/4e/Johnson.jpg/revision/latest?cb=20160625153352" height="300" width="300">';
        } else if (userGuess === "p"){
            dynImage += 'https://3.imimg.com/data3/BL/KS/MY-2094364/white-creamwove-paper-250x250.jpg" height="300" width="300">';
        } else if(userGuess === "s"){
            dynImage += 'https://static1.squarespace.com/static/51486963e4b07ce92120ace4/546a5aa7e4b0a63175559b89/59095861e4fcb524ee618e85/1493784677376/20170501_0151_4x4.jpg?format=750w" height="300" width="300">';
        }

        var compImage = '<img src="';

        if (computerGuess === "r"){
            compImage += 'https://vignette.wikia.nocookie.net/yandere-simulator-fanon/images/4/4e/Johnson.jpg/revision/latest?cb=20160625153352" height="300" width="300">';
        } else if (computerGuess === "p"){
            compImage += 'https://3.imimg.com/data3/BL/KS/MY-2094364/white-creamwove-paper-250x250.jpg" height="300" width="300">';
        } else if( computerGuess === "s"){
            compImage += 'https://static1.squarespace.com/static/51486963e4b07ce92120ace4/546a5aa7e4b0a63175559b89/59095861e4fcb524ee618e85/1493784677376/20170501_0151_4x4.jpg?format=750w" height="300" width="300">';
        }

    var scorehtml = 
        "<div class=\"row justify-content-center\">" +
        "<div class=\"col-4\">" +
        "<p class=\"text-center\">Your Guess: " + userGuess + "</p>" +
        "<div class=\"text-center\"> " + dynImage +  "</div>" +
        "</div>" + 
        "<div class=\"col-4\">" +
        "<p class=\"text-center\">Score </p>" +
        "<p class=\"text-center\">Wins:" + wins + 
        "<p class=\"text-center\">Losses:" + losses + 
        "<p class=\"text-center\">Ties:" + ties +
        "</div>" +
        "<div class=\"col-4\">" +
        "<p class=\"text-center\">Comp: " + computerGuess + "</p>" +
        "<div class=\"text-center\"> " + compImage + "</div>" +
        "</div>" + 
        "</div>"; 

    document.querySelector("#instructionsAndScore").innerHTML = scorehtml;

    }
};