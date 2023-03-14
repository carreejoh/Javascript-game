var startgamebutton = document.querySelector("#startgame");
var startgamelayout = document.querySelector(".start");
var gamelayout = document.querySelector(".game");
var gamequestion = document.querySelector("#question");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var scoretext = document.querySelector("#score");
var timeleft = document.querySelector("#time");



timeleft.textContent = 60
score = 0;
scoretext.textContent = 0;
questionnumber = 1


gamelayout.style.display = "none";

//TODO add functions wrong and correct


function changequestion() {
    if (questionnumber === 2) {
        question2();
    } else if (questionnumber === 3) {
        question3();
    } else if (questionnumber === 4) {
        question4();
    }
}


function wrong() {
    questionnumber++ ;
    changequestion();
}

function correct() {
    score++;
    var gamescore = (score * 10);
    scoretext.textContent = gamescore;
    questionnumber++ ;
    console.log(questionnumber);
    changequestion();
}


function question1() {
    gamequestion.textContent = "What does a variable do"; //Change Quesitons
    answer1.textContent = "Answer1test";
    answer2.textContent = "Answer2testcorrect";
    answer3.textContent = "Answer3test";
    answer4.textContent = "Answer4test";
    // TODO add if statement for time penalty, score, local memory
    answer1.addEventListener("click", wrong, );
    answer2.addEventListener("click", correct, );
    answer3.addEventListener("click", wrong, );
    answer4.addEventListener("click", wrong, );
}

function question2() {
    gamequestion.textContent = "GOOBA GOOBA"; //Change Quesitons
    answer1.textContent = "Answer1test1";
    answer2.textContent = "Answer2test1";
    answer3.textContent = "Answer3test1correct";
    answer4.textContent = "Answer4test1";

    answer1.addEventListener("click", wrong, );
    answer2.addEventListener("click", wrong, );
    answer3.addEventListener("click", correct, );
    answer4.addEventListener("click", wrong, );
}

function question3() {
    gamequestion.textContent = "Question3test"; //Change Quesitons
    answer1.textContent = "Answer1test1222";
    answer2.textContent = "Answer2test1222";
    answer3.textContent = "Answer3test1222correct";
    answer4.textContent = "Answer4test1222";

    answer1.addEventListener("click", wrong, );
    answer2.addEventListener("click", wrong, );
    answer3.addEventListener("click", correct, );
    answer4.addEventListener("click", wrong, );
}

function question4() {
    gamequestion.textContent = "Question4test"; //Change Quesitons
    answer1.textContent = "Answer1test1222";
    answer2.textContent = "Answer2test1222";
    answer3.textContent = "Answer3test1222";
    answer4.textContent = "Answer4test1222correct";

    answer1.addEventListener("click", wrong, );
    answer2.addEventListener("click", wrong, );
    answer3.addEventListener("click", wrong, );
    answer4.addEventListener("click", correct, );
}


function startgame(event) {
    event.preventDefault();
    console.log("It works");
    startgamelayout.style.display = "none";
    gamelayout.style.display = "block";
    question1();
}




startgamebutton.addEventListener("click", startgame);