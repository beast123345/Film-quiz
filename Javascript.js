
let score = 0;
let currentQuest = 0;

const Quests = [
  {
    Quest: "How tall are Minions?",
    answer: "Unknown"
  },
  {
    Quest: "How many hairstyles do Minions have?",
    answer: "A few"
  },
  {
    Quest: "What is Minions' favorite color?",
    answer: "Unknown"
  },
  
  {
    Quest: "What language do Minions speak?",
    answer: "Unknown"
  },

  {
    Quest: "Which Minion was knighted by Queen Elizabeth?",
    answer: "None"
  },


  {
    Quest: "What do Minions love to eat?",
    answer: "Bananas"
  },

  {
    Quest: "How many fingers do Minions have?",
    answer: "3"
  },

  {
    Quest: "Who is the bad guy in Despicable Me?",
    answer: "Vector"
  },

  {
    Quest: "What song do Minions sing in Despicable Me 2?",
    answer: "YMCA"
  },

  {
    Quest: "Who is the main character in Despicable Me?",
    answer: "Gru"
  },
];

const QuestElement = document.getElementById("Quest");
const userAnswerElement = document.getElementById("user-answer");
const submitAnswerElement = document.getElementById("submit-answer");
const resultElement = document.getElementById("result");

function askQuest() {
  const Quest = Quests[currentQuest];
  QuestElement.textContent = Quest.Quest;
  userAnswerElement.value = "";
  resultElement.textContent = "";
}

function checkAnswer() {
  const userAnswer = userAnswerElement.value.trim().toLowerCase();
  const correctAnswer = Quests[currentQuest].answer.toLowerCase();
  if (userAnswer === correctAnswer) {
    score++;
  }
  currentQuest++;
  if (currentQuest < Quests.length) {
    askQuest();
  } else {
    displayScore();
  }
}

function displayScore() {
  const percentage = (score / Quests.length) * 100;
  let grade;
  if (percentage >= 90) {
    grade = "A";
  } else if (percentage >= 80) {
    grade = "B";
  } else if (percentage >= 70) {
    grade = "C";
  } else if (percentage >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }
  resultElement.textContent = `You scored ${percentage}% and got a grade of ${grade} `;
}

askQuest();

submitAnswerElement.addEventListener("click", checkAnswer);

