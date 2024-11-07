const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: 2
  },
  {
    question: "What is the capital of india?",
    options: ["Berlin", "USA", "Paris", "Delhi"],
    answer: 3   
},
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: 1
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answer: 3
  }
];

let currentQuestion = 0;
let score = 0;
let answers = Array(quizData.length).fill(null);

const quizContainer = document.getElementById("quiz");
const scoreDisplay = document.getElementById("score");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const submitButton = document.getElementById("submit");

function loadQuestion(index) {
  const questionData = quizData[index];
  quizContainer.innerHTML = `
    <h2>${questionData.question}</h2>
    ${questionData.options.map((option, i) => `
      <label>
        <input type="radio" name="answer" value="${i}" ${answers[index] === i ? "checked" : ""}>
        ${option}
      </label><br>
    `).join('')}
  `;

  
  if (index === quizData.length - 1) {
    nextButton.style.display = "none";
    submitButton.style.display = "inline-block";
  } else {
    nextButton.style.display = "inline-block";
    submitButton.style.display = "none";
  }
  
  
  previousButton.style.display = index === 0 ? "none" : "inline-block";
}

function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion(currentQuestion);
  }
}
function nextQuestion() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (selectedOption) {
    answers[currentQuestion] = parseInt(selectedOption.value);
  }
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    loadQuestion(currentQuestion);
  }
}

function submitQuiz() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (selectedOption) {
    answers[currentQuestion] = parseInt(selectedOption.value);
  }
  score = answers.reduce((acc, answer, i) => acc + (answer === quizData[i].answer ? 1 : 0), 0);
  const percentageScore = (score / quizData.length) * 100;
  scoreDisplay.textContent = `Your Score: ${percentageScore}%`;
  quizContainer.innerHTML = "";
  previousButton.style.display = "none";
  nextButton.style.display = "none";
  submitButton.style.display = "none";
}
loadQuestion(currentQuestion);
