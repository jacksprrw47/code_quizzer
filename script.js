// Smooth scrolling for navigation links and quiz exit
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        const target = document.querySelector(href);

        // If navigating away from quiz section, close the quiz
        if (href !== '#quiz') {
            resetQuizUI();
        }

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

function resetQuizUI() {
    const quizArea = document.getElementById('quiz-area');
    const resultsArea = document.getElementById('results-area');

    if (quizArea.style.display !== 'none' || resultsArea.style.display !== 'none') {
        document.getElementById('language-selection').style.display = 'block';
        document.getElementById('quiz-area').style.display = 'none';
        document.getElementById('results-area').style.display = 'none';
    }
}

// Log a welcome message
console.log('Welcome to my website! Feel free to customize the HTML, CSS, and JavaScript files.');
