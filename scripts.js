// rename to script.js

//create and store questions
var questions = [
    {
       title: "What is my favorite food?",
       choices: ["pizza", "pasta", "bread","tacos"],
       answer: "pasta"
    },
    {
        title: "What is my name 1?",
       choices: ["gary", "mike", "tim","tacos"],
       answer: "mike"
    },
    {
        title: "What is my name 2?",
       choices: ["gary", "mike", "tim","tacos"],
       answer: "tim"
    },
    {
        title: "What is my name 3?",
       choices: ["gary", "mike", "tim","tacos"],
       answer: "tacos"
    }
];

var timer;
var time = 60;
function startQuiz() {
    //hide the start elements
    document.querySelector("#start-screen").classList.add("hide")

    //show the questions contianer
    document.querySelector("#questions").classList.remove("hide")

    //start the timer
    timer = setInterval(function() {
        //decrease time
        time--;

        //show the decreased time
        document.querySelector("#time").textContent = time;

        //end quiz if time runs out
        if (time <= 0) {
            endQuiz();
        }
    },1000);

    //show the first question
    showQuestions();
};

document.querySelector("#start").addEventListener("click", startQuiz);

var questionIndex = 0;
function showQuestions() {
    //create question markup
    var questionHTML = `
        <div class="question">
            <h2 class="question-title">${questions[questionIndex].title}</h2>
            <div class="choices-container">
                <div class="question-choice">${questions[questionIndex].choices[0]}</div>
                <div class="question-choice">${questions[questionIndex].choices[1]}</div>
                <div class="question-choice">${questions[questionIndex].choices[2]}</div>
                <div class="question-choice">${questions[questionIndex].choices[3]}</div>
            </div>
        </div>
    `;

    //convert string html into html and add it to the page
    document.querySelector("#questions").innerHTML = questionHTML;

    //assign event listener to each question choice
    var arrayChoices = document.querySelectorAll(".question-choice");
    for (let i = 0; i < arrayChoices.length; i++) {
        arrayChoices[i].addEventListener("click", handleAnswerClick);
    }
}

var score = 0;
function handleAnswerClick(e) {
    //check if answer is correct
    if (e.target.textContent === questions[questionIndex].answer) {
        score++;
    } else {
        time -= 10;
    }

    //show the next question
    questionIndex++;

    if (questionIndex === questions.length) {
        endQuiz();
    } else {
        showQuestions();
    }
}

function endQuiz() {
    //stop the timer
    clearInterval(timer);

    //hide the question CredentialsContainer
    document.querySelector("#questions").classList.add("hide");

    //display the final score
    document.querySelector("#final-score").textContent = score;

    //show the end screen
    document.querySelector("#end-screen").classList.remove("hide");
}


// var startButton = document.getElementById('start-button');
// var qContainer = document.getElementById('question-container');
// var qElement = document.getElementById('question');
// var answer = document.getElementById('answer-buttons');
// var questionIndex = 0;
// var setTimer;
// startButton.addEventListener('click, startQuiz')

// function startQuiz(){
//     startButton.classList.add('hidden');
//     qContainer.classList.remove('hidden');
//     setTimer = nyVar = setInterval(alertFunc, 3000);   
// }

// function alertFunc() {
//     alert("Hello!")
// }

// function sQuestion() {
//     answer.textContent = '';
//     qElement.innerHT/ML = 0;
// }