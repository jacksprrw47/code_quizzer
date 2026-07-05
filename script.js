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

// Register service worker for PWA functionality
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(reg => {
            console.log('✅ Service Worker registered');
        })
        .catch(err => {
            console.error('❌ Service Worker registration failed:', err);
        });
} else {
    console.warn('⚠️ Service Workers not supported');
}

// Download/Install App
const downloadBtn = document.getElementById('download-btn');
let deferredPrompt;

// Detect if mobile
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Only show download button on mobile
if (!isMobile()) {
    downloadBtn.style.display = 'none';
}

// Listen for PWA install prompt
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
});

downloadBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
        // If PWA prompt available, use it
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            alert('App installed! Check your home screen.');
        }
        deferredPrompt = null;
    } else {
        // Fallback: Show Android instructions
        showAndroidInstructions();
    }
});

function showAndroidInstructions() {
    alert(
        '📱 Install on Android:\n\n' +
        '1. Tap the 3 dots menu (⋮) in top right\n' +
        '2. Tap "Install app" or "Add to Home Screen"\n' +
        '3. Tap "Install"\n\n' +
        '✅ App icon will appear on your home screen!'
    );
}

window.addEventListener('appinstalled', () => {
    alert('✅ App installed successfully! Check your home screen.');
    deferredPrompt = null;
});
