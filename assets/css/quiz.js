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
        "question": "",
        "answers": [
            "Manny", "Sid", "Leonard", "Scrat"
        ],
        "correct": 1
    },
]