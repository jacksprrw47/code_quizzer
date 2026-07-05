let currentQuiz = {
    questions: [],
    currentQuestion: 0,
    score: 0,
    selectedLanguage: null,
    answeredQuestions: []
};

function initQuiz() {
    const langButtons = document.querySelectorAll('.lang-btn');

    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            startQuiz(this.dataset.language);
        });
    });

    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', nextQuestion);

    const restartBtn = document.getElementById('restart-btn');
    restartBtn.addEventListener('click', restartQuiz);
}

function startQuiz(language) {
    const questions = quizQuestions[language];

    currentQuiz = {
        questions: shuffleArray([...questions]),
        currentQuestion: 0,
        score: 0,
        selectedLanguage: language,
        answeredQuestions: []
    };

    document.getElementById('language-selection').style.display = 'none';
    document.getElementById('quiz-area').style.display = 'block';
    document.getElementById('results-area').style.display = 'none';
    document.getElementById('total-questions').textContent = currentQuiz.questions.length;

    displayQuestion();
}

function displayQuestion() {
    const question = currentQuiz.questions[currentQuiz.currentQuestion];
    const questionNum = currentQuiz.currentQuestion + 1;

    document.getElementById('current-question').textContent = questionNum;
    document.getElementById('question-text').textContent = question.question;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answer';
        input.value = index;
        input.id = `option-${index}`;

        const label = document.createElement('label');
        label.htmlFor = `option-${index}`;
        label.textContent = option;

        optionDiv.appendChild(input);
        optionDiv.appendChild(label);
        optionsContainer.appendChild(optionDiv);

        input.addEventListener('change', function() {
            checkAnswer(index);
        });
    });

    updateProgressBar();
    document.getElementById('next-btn').style.display = 'none';
}

function checkAnswer(selectedIndex) {
    const question = currentQuiz.questions[currentQuiz.currentQuestion];

    currentQuiz.answeredQuestions.push({
        question: question.question,
        selected: selectedIndex,
        correct: question.correct,
        isCorrect: selectedIndex === question.correct
    });

    if (selectedIndex === question.correct) {
        currentQuiz.score++;
    }

    document.getElementById('next-btn').style.display = 'block';

    // Disable all options after answer
    document.querySelectorAll('.option input').forEach(input => {
        input.disabled = true;
    });

    // Highlight correct answer
    const correctOption = document.getElementById(`option-${question.correct}`);
    correctOption.parentElement.classList.add('correct-answer');

    // Highlight wrong selection if different
    if (selectedIndex !== question.correct) {
        const selectedOption = document.getElementById(`option-${selectedIndex}`);
        selectedOption.parentElement.classList.add('wrong-answer');
    }
}

function nextQuestion() {
    currentQuiz.currentQuestion++;

    if (currentQuiz.currentQuestion < currentQuiz.questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function updateProgressBar() {
    const progress = ((currentQuiz.currentQuestion + 1) / currentQuiz.questions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
}

function showResults() {
    document.getElementById('quiz-area').style.display = 'none';
    document.getElementById('results-area').style.display = 'block';

    const totalQuestions = currentQuiz.questions.length;
    const percentage = Math.round((currentQuiz.score / totalQuestions) * 100);

    document.getElementById('final-score').textContent = currentQuiz.score;
    document.getElementById('total-questions-result').textContent = totalQuestions;
    document.getElementById('percentage').textContent = percentage;
}

function restartQuiz() {
    document.getElementById('language-selection').style.display = 'block';
    document.getElementById('quiz-area').style.display = 'none';
    document.getElementById('results-area').style.display = 'none';
    currentQuiz = {
        questions: [],
        currentQuestion: 0,
        score: 0,
        selectedLanguage: null,
        answeredQuestions: []
    };
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', initQuiz);
