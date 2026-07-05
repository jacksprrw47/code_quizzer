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

// PWA Install Prompt
let deferredPrompt;
const installBtn = document.getElementById('install-btn');
const installModal = document.getElementById('install-modal');

// Detect device type
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

console.log('📱 Device: ' + (isMobile() ? 'Mobile' : 'Desktop'));

// Show install button on mobile
if (isMobile()) {
    installBtn.style.display = 'block';
    console.log('✅ Install button shown on mobile');
}

window.addEventListener('beforeinstallprompt', (e) => {
    console.log('🎉 beforeinstallprompt event fired - PWA ready to install!');
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = 'block';
});

installBtn.addEventListener('click', async () => {
    console.log('Install button clicked. Deferred prompt:', !!deferredPrompt);

    if (deferredPrompt) {
        // If PWA prompt available, use it
        console.log('📥 Showing PWA install prompt...');
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response: ${outcome}`);
        deferredPrompt = null;
    } else {
        // Otherwise, show instructions modal
        console.log('📋 Showing installation instructions modal');
        openInstallModal();
    }
});

function openInstallModal() {
    installModal.style.display = 'flex';
}

function closeInstallModal() {
    installModal.style.display = 'none';
}

window.addEventListener('appinstalled', () => {
    console.log('🎉 App successfully installed!');
    deferredPrompt = null;
});

// Debug: Log manifest loading
fetch('/manifest.json')
    .then(r => {
        if (r.ok) {
            console.log('✅ manifest.json loaded successfully');
            return r.json();
        }
        throw new Error('Manifest failed to load');
    })
    .then(manifest => {
        console.log('✅ Manifest is valid:', manifest);
    })
    .catch(err => {
        console.error('❌ Manifest error:', err);
    });
