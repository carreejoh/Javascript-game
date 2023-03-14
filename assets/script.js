var startgamebutton = document.querySelector("#startgame");
var startgamelayout = document.querySelector(".start");
var gamelayout = document.querySelector(".game");
var gamequestion = document.querySelector("#question");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");

gamelayout.style.display = "none";





function question1() {
    gamequestion.textContent = "What does a variable do"; //Change Quesitons
    answer1.textContent = "Answer1test";
    answer2.textContent = "Answer2test";
    answer3.textContent = "Answer3test";
    answer4.textContent = "Answer4test";
    // TODO add if statement for time penalty, score, local memory
}

function startgame(event) {
    event.preventDefault();
    console.log("It works");
    startgamelayout.style.display = "none";
    gamelayout.style.display = "block";
    question1();
}





startgamebutton.addEventListener("click", startgame);