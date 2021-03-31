var barbQuestions = [
  {
    q:
      "When Queen Nicki was calling all Barbz, where was she making them report to?",
    a: "A Concert",
    b: "Her Live",
    c: "The Conference Room",
    d: "Trisha's House",
  },
  {
    q:
      "She's huge, but she's so beautiful. She's a mammoth of course 🙄. Who is she?",
    a: "Sid",
    b: "Steffie",
    c: "Trisha",
    d: "Scrat",
  },
  {
    q: "You b*tches can't even spell ______.",
    a: "Prague",
    b: "Supercalifragilisticexpialidocious",
    c: "Barbz",
    d: "Csechoslovakia",
  },
  {
    q: "Did you guys see my ____ and my ______?",
    a: "🐙  🌸",
    b: "🔥  💰",
    c: "⏰  👗",
    d: "🐱  🍑",
  },
  {
    q: "Queen Nicki hates doing shit and not _______?",
    a: "Finishing it",
    b: "Perfecting it",
    c: "Showing off",
    d: "Stopping",
  },
  {
    q: "Why are they there then? What is they???",
    a: "Barbz",
    b: "Fans",
    c: "Gumbawlls",
    d: "Cats",
  },
  {
    q: "Who's not valid?",
    a: "Barbz",
    b: "Nicki Lewinski",
    c: "Roman Nicki",
    d: "Broke people who can't pay their mother effin bills",
  },
  {
    q: "Who should never give you fashion advice?",
    a: "Jean vest wearers",
    b: "Anna Wintour",
    c: "Queen Nicki",
    d: "Jenny",
  },
  {
    q: "Who should never laugh?",
    a: "Barbz",
    b: "Broke people",
    c: "Idiots",
    d: "Trisha",
  },
];

var answers = ["c", "b", "a", "d", "b", "c", "d", "a", "b"];
var startBtn = document.getElementById("startButton");
var content = document.getElementById("gameOn");
var quiz = document.getElementById("quiz");
var nextBtn = document.getElementById("next");
var submitBtn = document.getElementById("submit");
var question = document.getElementById("question");
var displayEndGameScreen = document.getElementById("endGameScreen");
var playerSubmitBtn = document.getElementById("playersubmit");

var aButton = document.getElementById("label1");
var bButton = document.getElementById("label2");
var cButton = document.getElementById("label3");
var dButton = document.getElementById("label4");

var choices = document.querySelectorAll(".choice");
var currentQ = 0;
var currentObj = barbQuestions[currentQ];
var score = 0;
var rightDisplay = document.getElementById("right");
var wrongDisplay = document.getElementById("wrong");
var firedBtn = "";
var timeEl = document.querySelector(".time");
var secondsLeft = 40;

var player = document.getElementById("playerName");

hslist = document.getElementById("highScoreList");

startBtn.addEventListener("click", startQuiz);

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    // if (secondsLeft === 0) {
    //   clearInterval(timerInterval);
    //   sendMessage();
    // }
  }, 2000);
}
var storedHighScores;

function startQuiz() {
  timeEl.textContent = secondsLeft;
  startBtn.classList.add("hide");
  quiz.classList.remove("hide");
  nextBtn.classList.remove("hide");
  document.getElementById("timer").classList.remove("hide");

  var storedHighScores = JSON.parse(localStorage.getItem("highscore"));

  if (storedHighScores !== null) {
    highscore = storedHighScores;
  }
  console.log(highscore[0]);
  setTime();
  displayQuestion();
}

function displayQuestion() {
  if (currentQ > 8) {
    return;
  }
  question.innerText = barbQuestions[currentQ].q;
  aButton.innerText = barbQuestions[currentQ].a;
  bButton.innerText = barbQuestions[currentQ].b;
  cButton.innerText = barbQuestions[currentQ].c;
  dButton.innerText = barbQuestions[currentQ].d;
}

function checkResults() {
  firedBtn = this.value;

  if (firedBtn === answers[currentQ]) {
    score++;
    rightDisplay.classList.remove("hide");
  } else {
    wrongDisplay.classList.remove("hide");
    // timer second penalty
    secondsLeft = secondsLeft - 10;
    setTime();
  }
}

choices.forEach(function (choice) {
  choice.addEventListener("click", checkResults);
});

function nextQuestion() {
  if (currentQ > 6) {
    nextBtn.classList.add("hide");
    submitBtn.classList.remove("hide");
  }
  if (firedBtn === answers[currentQ]) {
    rightDisplay.classList.add("hide");
  } else {
    wrongDisplay.classList.add("hide");
  }
  currentQ++;
  displayQuestion();
}
var highscore = {};

function saveNewScore(event) {
  event.preventDefault();
  highscore = {
    player: player.value.trim(),
    score: score,
  };
  localStorage.setItem("highscore", JSON.stringify(highscore));
  console.log(highscore);
}

function endGameScreen() {
  content.classList.remove("content");
  content.classList.add("hide");
  displayEndGameScreen.classList.remove("hide");
  displayEndGameScreen.classList.add("endGameScreen");
  document.getElementById("timer").classList.add("hide");
  document.getElementById("pinkScore").textContent = score;
}

function renderHighScores() {
  hslist.innerHTML = "";
  for (i = 0; i < hslist.length; i++) {
    var hs = highscore[i];
  }
}

nextBtn.addEventListener("click", nextQuestion);
submitBtn.addEventListener("click", endGameScreen);
playerSubmitBtn.addEventListener("click", saveNewScore);

console.log(highscore[0]);
