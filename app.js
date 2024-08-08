
const questions = [
  {
    question: "What does the 'alt' attribute in an HTML image tag specify?",
    options: ["Alternative text for an image", "Alignment of the image", "Image source", "Image title"],
    answer: "Alternative text for an image"
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<hyperlink>"],
    answer: "<a>"
  },
  {
    question: "Which HTML element is used for the largest heading?",
    options: ["<h1>", "<h6>", "<header>", "<head>"],
    answer: "<h1>"
  },
  {
    question: "How do you create an unordered list in HTML?",
    options: ["<ul>", "<ol>", "<list>", "<li>"],
    answer: "<ul>"
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<style>", "<script>", "<css>", "<head>"],
    answer: "<style>"
  },
  {
    question: "Which property is used to change the background color in CSS?",
    options: ["background-color", "color", "bgcolor", "background"],
    answer: "background-color"
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-size", "text-size", "text-style", "font-style"],
    answer: "font-size"
  },
  {
    question: "How do you center a block element horizontally in CSS?",
    options: ["margin: 0 auto;", "text-align: center;", "padding: 0 auto;", "display: center;"],
    answer: "margin: 0 auto;"
  },
  {
    question: "Which CSS property is used to change the text color of an element?",
    options: ["color", "font-color", "text-color", "foreground-color"],
    answer: "color"
  },
  {
    question: "What does 'CSS' stand for?",
    options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Cascading Simple Sheets"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which of the following is a correct way to declare a JavaScript variable?",
    options: ["var x;", "variable x;", "x = var;", "v x;"],
    answer: "var x;"
  },
  {
    question: "Which operator is used to assign a value to a variable in JavaScript?",
    options: ["=", "==", "===", "=>"],
    answer: "="
  },
  {
    question: "Which built-in method can be used to convert an object to a JSON string in JavaScript?",
    options: ["JSON.stringify()", "JSON.parse()", "toString()", "Object.stringify()"],
    answer: "JSON.stringify()"
  },
  {
    question: "Which method is used to add an element to the end of an array in JavaScript?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()"
  },
  {
    question: "Which keyword is used to define a constant variable in JavaScript?",
    options: ["const", "let", "var", "constant"],
    answer: "const"
  }
  
  
  ];

let currentQuestionIndex = 0;
let score = 0;
let number=1;
let totalNumber=questions.length;
let answered = false; // متغير لتتبع ما إذا تم اختيار إجابة أم لا

function showQuestion() {
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const resultElement = document.getElementById('result');
  let showNumber=document.getElementById('number')


  resultElement.textContent = ''; // Clear previous result
  questionElement.textContent = questions[currentQuestionIndex].question;
  optionsElement.innerHTML = '';

  questions[currentQuestionIndex].options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.addEventListener('click', () => checkAnswer(button, option));
      optionsElement.appendChild(button);

  });

  showNumber.innerText=`${number}/${questions.length}`;
  showNumber.classList.add('questionNumber')
  answered = false; // إعادة تعيين حالة الإجابة إلى عدم الإجابة

}

function checkAnswer(button, selectedOption) {
  const correctAnswer = questions[currentQuestionIndex].answer;
  const resultElement = document.getElementById('result');

  if (selectedOption === correctAnswer) {
      button.classList.add('correct');
      resultElement.textContent = 'Correct!';
      score++;
  } else {
      button.classList.add('wrong');
      resultElement.textContent = 'Wrong!';
  }

  // Disable all buttons after selecting an answer
  const buttons = document.querySelectorAll('#options button');
  buttons.forEach(btn => {
      btn.disabled = true;
  });
  answered = true;

}

function showResults() {
  const quizContainer = document.getElementById('quiz-container');
  quizContainer.innerHTML = `<h2>Your score: ${score}/${questions.length}</h2>`;
}

document.getElementById('next-button').addEventListener('click', () => {
  
  
  if (!answered) { // التحقق من ما إذا تم الإجابة على السؤال
    alert("يرجى اختيار إجابة قبل الانتقال إلى السؤال التالي!");
    return;
  }
  currentQuestionIndex++;
  number++;
  if (currentQuestionIndex < questions.length) {
      showQuestion();
  } else {
      showResults();
  }
});

showQuestion(); // Show the first question


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 




























