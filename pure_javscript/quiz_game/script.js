const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const totalQuestionSpan = document.getElementById("total-question");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

const questionText = document.getElementById("question-text");
const currentQuestionSpan = document.getElementById("current-question");
const scoreSpan = document.getElementById("score");

const answersContainer = document.getElementById("answers-container");
const progress = document.getElementById("progress");

const finalScore = document.getElementById("final-score");
const maxScore = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");

const quizQuestions = [
    {
        question: "What is the capital of Nepal?",
        answers: [
            { text: "Pokhara", correct: false },
            { text: "Lumbini", correct: false },
            { text: "Kathmandu", correct: true },
            { text: "Sailung", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: false }
        ]
    },
    {
        question: "Who is known as the father of the computer?",
        answers: [
            { text: "Alan Turing", correct: false },
            { text: "Charles Babbage", correct: true },
            { text: "Bill Gates", correct: false },
            { text: "Steve Jobs", correct: false }
        ]
    },
    {
        question: "Which is the largest ocean in the world?",
        answers: [
            { text: "Indian Ocean", correct: false },
            { text: "Atlantic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Arctic Ocean", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let currentScore = 0;
let answersDisabled = false;

totalQuestionSpan.textContent = quizQuestions.length;
maxScore.textContent = quizQuestions.length;

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", restartQuiz);

function startQuiz() {
    currentQuestionIndex = 0;
    currentScore = 0;
    answersDisabled = false;

    scoreSpan.textContent = currentScore;

    startScreen.classList.remove("active");
    resultScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion();
}

function showQuestion() {
    answersDisabled = false;

    const currentQuestion = quizQuestions[currentQuestionIndex];

    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    questionText.textContent = currentQuestion.question;

    const progressPercent =
        (currentQuestionIndex / quizQuestions.length) * 100;

    progress.style.width = `${progressPercent}%`;

    answersContainer.innerHTML = "";

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");

        button.textContent = answer.text;
        button.classList.add("answer-btn");
        button.dataset.correct = answer.correct;

        button.addEventListener("click", selectAnswer);

        answersContainer.appendChild(button);
    });
}

function selectAnswer(event) {
    if (answersDisabled) {
        return;
    }

    answersDisabled = true;

    const selectedButton = event.currentTarget;
    const isCorrect = selectedButton.dataset.correct === "true";

    if (isCorrect) {
        selectedButton.classList.add("correct");

        currentScore++;
        scoreSpan.textContent = currentScore;
    } else {
        selectedButton.classList.add("incorrect");
    }

    const answerButtons =
        answersContainer.querySelectorAll(".answer-btn");

    answerButtons.forEach((button) => {
        button.disabled = true;

        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
    });

    progress.style.width = `${
        ((currentQuestionIndex + 1) / quizQuestions.length) * 100
    }%`;

    setTimeout(() => {
        currentQuestionIndex++;

        if (currentQuestionIndex < quizQuestions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 1000);
}
function showResult() {
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");

    finalScore.textContent = currentScore;
    maxScore.textContent = quizQuestions.length;

    const percentage =
        (currentScore / quizQuestions.length) * 100;

    if (percentage === 100) {
        resultMessage.textContent = "Perfect score!";
    } else if (percentage >= 75) {
        resultMessage.textContent = "Excellent work!";
    } else if (percentage >= 50) {
        resultMessage.textContent = "Good job!";
    } else {
        resultMessage.textContent = "Keep studying!";
    }
}

function restartQuiz() {
    resultScreen.classList.remove("active");
    startScreen.classList.add("active");

    currentQuestionIndex = 0;
    currentScore = 0;
    answersDisabled = false;

    scoreSpan.textContent = "0";
    currentQuestionSpan.textContent = "1";
    progress.style.width = "0%";
    answersContainer.innerHTML = "";
}