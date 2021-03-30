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
var quiz = document.getElementById("quiz");
var nextBtn = document.getElementById("next");
var question = document.getElementById("question");

var aButton = document.getElementById("label1");
var bButton = document.getElementById("label2");
var cButton = document.getElementById("label3");
var dButton = document.getElementById("label4");

var choices = document.getElementsByClassName("choices");
var currentQ = 0;
var currentObj = barbQuestions[currentQ];

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  startBtn.classList.add("hide");
  quiz.classList.remove("hide");
  nextBtn.classList.remove("hide");
  displayQuestion();
}

function displayQuestion() {
  question.innerText = barbQuestions[currentQ].q;
  aButton.innerText = barbQuestions[currentQ].a;
  bButton.innerText = barbQuestions[currentQ].b;
  cButton.innerText = barbQuestions[currentQ].c;
  dButton.innerText = barbQuestions[currentQ].d;
}

function checkResults() {
  var firedBtn = $(this).value();
  console.log(firedBtn);
}

choices.children().addEventListener("click", checkResults);
console.log(currentObj);
