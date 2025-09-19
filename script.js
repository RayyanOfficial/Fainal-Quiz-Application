const questions = [
    {
      question: "HTML ka full form kya hai?",
      options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "None"],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "CSS kis liye use hota hai?",
      options: ["Styling", "Structure", "Logic", "Data Storage"],
      answer: "Styling"
    },
    {
      question: "JavaScript kis type ki language hai?",
      options: ["Programming", "Styling", "Markup", "Query"],
      answer: "Programming"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById('question');
  const optionsEl = document.getElementById('options');
  const nextBtn = document.getElementById('next-btn');
  const resultBox = document.getElementById('result-box');
  const scoreEl = document.getElementById('score');
  
  function loadQuestion() {
    let q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
  
    q.options.forEach(option => {
      const btn = document.createElement('button');
      btn.classList.add('option-btn');
      btn.textContent = option;
      btn.onclick = () => selectOption(btn, q.answer);
      optionsEl.appendChild(btn);
    });
  }
  
  function selectOption(button, correctAnswer) {
    const allButtons = document.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.disabled = true);
  
    if (button.textContent === correctAnswer) {
      button.style.backgroundColor = "#28a745";
      button.style.color = "white";
      score++;
    } else {
      button.style.backgroundColor = "#dc3545";
      button.style.color = "white";
      allButtons.forEach(btn => {
        if (btn.textContent === correctAnswer) {
          btn.style.backgroundColor = "#28a745";
          btn.style.color = "white";
        }
      });
    }
  
    nextBtn.style.display = "block";
  }
  
  nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
      nextBtn.style.display = "none";
    } else {
      showResult();
    }
  });
  
  function showResult() {
    document.getElementById('quiz-box').classList.add('hidden');
    resultBox.classList.remove('hidden');
    scoreEl.textContent = `You scored ${score} out of ${questions.length}`;
  }
  
  // Start quiz
  loadQuestion();
  