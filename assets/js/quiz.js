// Get elements from HTML file and stored in a new var

const question = document.getElementById('question');
const firstAnswer = document.getElementById('firstAnswer');
const secondAnswer = document.getElementById('secondAnswer');
const thirdAnswer = document.getElementById('thirdAnswer');
const forthAnswer = document.getElementById('forthAnswer');

const score = document.getElementById('score');
let questionNr = 0;

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
 * Load the qeustions based on the array
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
 * Function to start the quiz and load questions and answers
 */

function start() {
    loadQuestion(questionNr);
    loadAnswers(questionNr);
}
start();