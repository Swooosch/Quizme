// Get elements from HTML file

const question = document.getElementById('question');
const firstAnswer = document.getElementById('firstAnswer');
const secondAnswer = document.getElementById('secondAnswer');
const thirdAnswer = document.getElementById('thirdAnswer');
const forthAnswer = document.getElementById('forthAnswer');
const startOver = document.getElementById('startOver');

const score = document.getElementById('score');
let questionNr = 0;
let scoreTotal = 0;

// Question array
const questions = [
    {
        "question": "What's the name of the mammoth in Ice Age?",
        "answers": [
            "Manny", "Sid", "Leonard", "Scrat"
        ],
        "correct": 0
    },
    {
        "question": "What's the name of Elsa's sister in Frozen?",
        "answers": [
            "Ellie", "Anna", "Hannah", "Penny"
        ],
        "correct": 1
    },{
        "question": "What color is Blixten McQueen?",
        "answers": [
            "Yellow", "Black", "Pink", "Red"
        ],
        "correct": 3
    },{
        "question": "Who delivers gifts on christmas?",
        "answers": [
            "The Grinch", "Santa", "Batman", "Barbie"
        ],
        "correct": 1
    },
]

/**
 * Load the questions based on the array
 * @param {int} questionNumber 
 */
function loadQuestion(questionNr) {
    question.innerText = questions[questionNr].question;
}

/**
 * This function loads answers into the choice buttons
 * @param {int} questionNumber 
 */
function loadAnswers(questionNr) {
    firstAnswer.innerText = questions[questionNr].answers[0];
    secondAnswer.innerText = questions[questionNr].answers[1];
    thirdAnswer.innerText = questions[questionNr].answers[2];
    forthAnswer.innerText = questions[questionNr].answers[3];
  }
  
/**
 * Check if the choosen answer is correct
 * @param {int} answerNr
 */

function checkedAnswer(answerNr) {
    console.log('answer number chosen: ', answerNr);
    let controlAnswer = questions[questionNr].correct;
    if (answerNr === controlAnswer) {
        scoreTotal++;
        score.innerText = scoreTotal;
    }

    questionNr++;

    // End the game when out of questions

    const quizLength = questions.length;
    if (questionNr === quizLength) {
        endgame();
    } else {
        loadQuestion(questionNr);
        loadAnswers(questionNr);
    }

}
function endgame() {
    startOver.style.visibility = "visible";
}

// Function to end the game

function endgameOption(chosen) {
    if (chosen === 0) {
      window.location.reload()
    } else {
      wrapper.innerHTML = "<h1>Thank you for playing!</h1>"
    }
  }
/**
 * Function to start the quiz and load questions and answers
 */

function start() {
    startOver.style.visibility = "hidden";
    loadQuestion(questionNr);
    loadAnswers(questionNr);
}
start();