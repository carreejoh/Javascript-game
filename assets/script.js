var startgamebutton = document.querySelector("#startgame");
var startgamelayout = document.querySelector(".start");
var gamelayout = document.querySelector(".game");
var gamequestion = document.querySelector("#question");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var scoretext = document.querySelector(".score");
var endscore = document.querySelector("#endscore")
var timeleft = document.querySelector("#time");
var endgamescreen = document.querySelector(".end");
var scoreandtime = document.querySelector("header");
var initials = document.querySelector("#initials");
var highscoresubmit = document.querySelector("#highscoresubmit");
var scoreboard = document.querySelector("#initials+hs");

var score = 0;
scoretext.textContent = 0;
questionnumber = 1;
gamescore = 0;
var secondsLeft = 60;
initialsarray = [];
scorearray = [];

gamelayout.style.display = "none";
endgamescreen.style.display = "none";


function jsonintscore() {
    scoreboard.textContent = JSON.parse(localStorage.getItem("initials")) + JSON.parse(localStorage.getItem("score"));
}

function endgame() {
    gamelayout.style.display = "none";
    startgamelayout.style.display = "none";
    timeleft.style.display = "none";
    scoreandtime.style.display = "none";
    endgamescreen.style.display = "block";
    endscore.textContent = (score * 10); 
    localscore = (score * 10);
}

function setTime() {
    var timerinterval = setInterval(function() {
        secondsLeft--;
        timeleft.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerinterval);
            endgame();    
        }
    }, 1000); 
}

function rendermessage() {
    if (scorelist !== null, intlist !== null) {
        var scorelist = JSON.parse(localStorage.getItem("score"));
        var intlist = JSON.parse(localStorage.getItem("initials"));
        document.querySelector("#initials+hs").textContent = intlist + scorelist;
    }
}



function changequestion() {
    if (questionnumber === 2) {
        question2();
    } else if (questionnumber === 3) {
        question3();
    } else if (questionnumber === 4) {
        question4();
    } else if (questionnumber === 5) {
        question5();
    } else if (questionnumber === 6) {
        question6();
    } else {
        endgame();
    }
}


function wrong() {
    questionnumber++ ;
    changequestion();
    secondsLeft -= 5;
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
    //TODO USE THESE
    answer1.removeEventListener("click", wrong);
    answer2.removeEventListener("click", correct);
    answer3.removeEventListener("click", wrong);
    answer4.removeEventListener("click", wrong);

    gamequestion.textContent = "fgh"; //Change Quesitons
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
    answer1.removeEventListener("click", wrong);
    answer2.removeEventListener("click", wrong);
    answer3.removeEventListener("click", correct);
    answer4.removeEventListener("click", wrong);

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
    answer1.removeEventListener("click", wrong);
    answer2.removeEventListener("click", wrong);
    answer3.removeEventListener("click", correct);
    answer4.removeEventListener("click", wrong);

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

function question5() {
    answer1.removeEventListener("click", wrong);
    answer2.removeEventListener("click", wrong);
    answer3.removeEventListener("click", wrong);
    answer4.removeEventListener("click", correct);

    gamequestion.textContent = "Question5test"; //Change Quesitons
    answer1.textContent = "Answer1test1222correct";
    answer2.textContent = "Answer2test1222";
    answer3.textContent = "Answer3test1222";
    answer4.textContent = "Answer4test1222";

    answer1.addEventListener("click", correct, );
    answer2.addEventListener("click", wrong, );
    answer3.addEventListener("click", wrong, );
    answer4.addEventListener("click", wrong, );
}

function question6() {
    answer1.removeEventListener("click", correct);
    answer2.removeEventListener("click", wrong);
    answer3.removeEventListener("click", wrong);
    answer4.removeEventListener("click", wrong);

    gamequestion.textContent = "Question5test"; //Change Quesitons
    answer1.textContent = "Answer1test1222";
    answer2.textContent = "Answer2test1222";
    answer3.textContent = "Answer3test1222correct";
    answer4.textContent = "Answer4test1222";

    answer1.addEventListener("click", wrong, );
    answer2.addEventListener("click", wrong, );
    answer3.addEventListener("click", correct, );
    answer4.addEventListener("click", wrong, );
}

function startgame(event) {
    event.preventDefault();
    console.log("It works");
    startgamelayout.style.display = "none";
    gamelayout.style.display = "block";
    question1();
    setTime();
}

function highscore(event) {
    event.preventDefault();
    localStorage.setItem("initials", JSON.stringify(initials.value));
    localStorage.setItem("score", JSON.stringify(score * 10));
} 



highscoresubmit.addEventListener("click", highscore);
initials.addEventListener("click", jsonintscore);
startgamebutton.addEventListener("click", startgame);
