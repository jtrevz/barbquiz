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

var aText = document.getElementById("label1");
var bText = document.getElementById("label2");
var cText = document.getElementById("label3");
var dText = document.getElementById("label4");

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  startBtn.classList.add("hide");
  quiz.classList.remove("hide");
  nextBtn.classList.remove("hide");
  var currentQ = 0;
  question.innerText = barbQuestions[currentQ].q;
  aText.innerText = barbQuestions[currentQ].a;
  bText.innerText = barbQuestions[currentQ].b;
  cText.innerText = barbQuestions[currentQ].c;
  dText.innerText = barbQuestions[currentQ].d;
}

function nextQuestion() {}

function checkResults() {}

console.log(barbQuestions[0].a);
