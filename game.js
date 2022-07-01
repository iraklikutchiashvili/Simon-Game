var gamePattern = [];

var userClickedPattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var randomNumber;

var userChosenColour;

var started = false;

var level = 0;

$(".btn").click( function () {
    userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);

    animatePress(userChosenColour);
})


$(document).keypress( function () {
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});


function playSound(name) {
    var beat = new Audio("sounds/" + name + ".mp3");
    beat.play();
}


function animatePress (currentColour) {
   $("#" + currentColour).addClass("pressed");
   setTimeout(function(){
    $("#" + currentColour).removeClass("pressed");
   }, 100);
}


function nextSequence() {
    level++;

    $("#level-title").text("Level " + level);

    randomNumber = Math.floor((Math.random()*4));

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}


