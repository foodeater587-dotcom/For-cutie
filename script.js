// ============================================
// ROMANTIC WEBSITE - PREMIUM JAVASCRIPT
// ============================================

// Configuration - EDITABLE SECTIONS
const CONFIG = {
    // Change this to your actual start date
    startDate: new Date('2023-01-15T00:00:00'),
    // Change this to the path of your romantic song
    musicUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    songTitle: 'Our Love Song'
};

// ============================================
// DOM ELEMENTS
// ============================================

const loadingScreen = document.getElementById('loadingScreen');
const mainContent = document.getElementById('mainContent');
const playPauseBtn = document.getElementById('playPauseBtn');
const musicToggleNav = document.getElementById('musicToggleNav');
const bgMusic = document.getElementById('bgMusic');
const volumeSlider = document.getElementById('volumeSlider');
const progressSlider = document.getElementById('progressSlider');
const muteBtn = document.getElementById('muteBtn');
const songTitleElement = document.getElementById('songTitle');
const particlesContainer = document.getElementById('particlesContainer');
const fallingPetals = document.getElementById('fallingPetals');
const floatingHearts = document.getElementById('floatingHearts');
const sparkles = document.getElementById('sparkles');

// ============================================
// INITIALIZATION
// ============================================

window.addEventListener('load', () => {
    setTimeout(() => {
        hideLoadingScreen();
    }, 3000);
});

function hideLoadingScreen() {
    loadingScreen.style.opacity = '0';
    loadingScreen.style.pointerEvents = 'none';
    mainContent.style.animation = 'fadeIn 0.8s ease-in-out forwards';
    
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
}

// ============================================
// BACKGROUND EFFECTS
// ============================================

function createParticles() {
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `floatUp ${3 + Math.random() * 3}s ease-in infinite`;
        particle.style.animationDelay = Math.random() * 2 + 's';
        particlesContainer.appendChild(particle);
    }
}

function createFallingPetals() {
    const petalCount = 30;
    const petals = ['🌹', '🌸', '🌷', '💐'];
    
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.textContent = petals[Math.floor(Math.random() * petals.length)];
        petal.style.left = Math.random() * 100 + '%';
        petal.style.top = -20 + 'px';
        petal.style.animationDuration = (5 + Math.random() * 5) + 's';
        petal.style.animationDelay = Math.random() * 10 + 's';
        petal.style.opacity = 0.6 + Math.random() * 0.4;
        fallingPetals.appendChild(petal);
    }
}

function createFloatingHearts() {
    const heartCount = 20;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.textContent = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.bottom = -30 + 'px';
        heart.style.animationDuration = (6 + Math.random() * 4) + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.fontSize = (1 + Math.random() * 2) + 'rem';
        floatingHearts.appendChild(heart);
    }
}

function createSparkles() {
    const sparkleCount = 60;
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDuration = (1 + Math.random() * 1) + 's';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        sparkles.appendChild(sparkle);
    }
}

function initializeEffects() {
    createParticles();
    createFallingPetals();
    createFloatingHearts();
    createSparkles();
}

// ============================================
// COUNTDOWN TIMER
// ============================================

function updateCountdown() {
    const now = new Date().getTime();
    const startTime = CONFIG.startDate.getTime();
    const elapsed = now - startTime;
    
    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// ============================================
// MESSAGE SECTION - TYPING ANIMATION
// ============================================

function animateMessageText() {
    const messageElement = document.querySelector('.message-text');
    const fullText = messageElement.getAttribute('data-text');
    messageElement.textContent = '';
    let index = 0;
    
    function typeChar() {
        if (index < fullText.length) {
            messageElement.textContent += fullText[index];
            index++;
            setTimeout(typeChar, 20);
        }
    }
    
    typeChar();
}

// Trigger animation when section comes into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.classList.contains('message-section')) {
            animateMessageText();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const messageSection = document.querySelector('.message-section');
if (messageSection) {
    observer.observe(messageSection);
}

// ============================================
// QUOTES CAROUSEL
// ============================================

let currentQuote = 0;
const quotes = document.querySelectorAll('.quote-item');

function changeQuote(direction) {
    quotes[currentQuote].classList.remove('active');
    currentQuote = (currentQuote + direction + quotes.length) % quotes.length;
    quotes[currentQuote].classList.add('active');
}

// Auto-rotate quotes every 5 seconds
setInterval(() => {
    changeQuote(1);
}, 5000);

// ============================================
// MUSIC PLAYER
// ============================================

// Set up audio source
bgMusic.src = CONFIG.musicUrl;
songTitleElement.textContent = CONFIG.songTitle;

let isPlaying = false;
let previousVolume = 70;

function toggleMusic() {
    if (isPlaying) {
        bgMusic.pause();
        updateMusicButton();
    } else {
        bgMusic.play().catch(err => {
            console.log('Audio autoplay was prevented:', err);
        });
        updateMusicButton();
    }
    isPlaying = !isPlaying;
}

function updateMusicButton() {
    if (isPlaying) {
        playPauseBtn.textContent = '⏸️';
        playPauseBtn.title = 'Pause';
        musicToggleNav.classList.add('playing');
    } else {
        playPauseBtn.textContent = '▶️';
        playPauseBtn.title = 'Play';
        musicToggleNav.classList.remove('playing');
    }
}

playPauseBtn.addEventListener('click', toggleMusic);
musicToggleNav.addEventListener('click', toggleMusic);

// Volume control
volumeSlider.addEventListener('input', (e) => {
    const volume = e.target.value / 100;
    bgMusic.volume = volume;
    previousVolume = e.target.value;
    updateMuteButton();
});

// Progress control
progressSlider.addEventListener('input', (e) => {
    const time = (e.target.value / 100) * bgMusic.duration;
    bgMusic.currentTime = time;
});

// Update progress bar as music plays
bgMusic.addEventListener('timeupdate', () => {
    const progress = (bgMusic.currentTime / bgMusic.duration) * 100;
    progressSlider.value = isNaN(progress) ? 0 : progress;
});

// Update progress bar max value when metadata loads
bgMusic.addEventListener('loadedmetadata', () => {
    progressSlider.max = 100;
});

// Mute button
function toggleMute() {
    if (bgMusic.volume > 0) {
        previousVolume = volumeSlider.value;
        bgMusic.volume = 0;
        volumeSlider.value = 0;
    } else {
        bgMusic.volume = previousVolume / 100;
        volumeSlider.value = previousVolume;
    }
    updateMuteButton();
}

function updateMuteButton() {
    if (bgMusic.volume === 0) {
        muteBtn.textContent = '🔇';
        muteBtn.title = 'Unmute';
    } else {
        muteBtn.textContent = '🔊';
        muteBtn.title = 'Mute';
    }
}

muteBtn.addEventListener('click', toggleMute);

// Set initial volume
bgMusic.volume = volumeSlider.value / 100;
updateMuteButton();

// Try to autoplay on page load (may not work due to browser policies)
window.addEventListener('load', () => {
    bgMusic.play().catch(err => {
        console.log('Autoplay was prevented. User must click play button.');
    });
});

// ============================================
// SMOOTH SCROLL NAVIGATION
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// CONFETTI EFFECT (Optional)
// ============================================

function createConfetti() {
    const confettiPieces = 50;
    for (let i = 0; i < confettiPieces; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = ['#ff1744', '#ff69b4', '#ffd700', '#c084fc'][Math.floor(Math.random() * 4)];
        confetti.style.borderRadius = '50%';
        confetti.style.zIndex = '999';
        confetti.style.pointerEvents = 'none';
        confetti.style.animation = `confettiFall ${2 + Math.random() * 2}s ease-in forwards`;
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}

const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotateZ(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add confetti to CTA button
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        createConfetti();
    });
}

// ============================================
// CURSOR SPARKLE EFFECT
// ============================================

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Create small sparkles on click
document.addEventListener('click', (e) => {
    for (let i = 0; i < 5; i++) {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'fixed';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        sparkle.style.width = '6px';
        sparkle.style.height = '6px';
        sparkle.style.backgroundColor = '#ffd700';
        sparkle.style.borderRadius = '50%';
        sparkle.style.zIndex = '998';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.boxShadow = '0 0 15px rgba(255, 215, 0, 0.9)';
        document.body.appendChild(sparkle);
        
        const offsetX = (Math.random() - 0.5) * 100;
        const offsetY = (Math.random() - 0.5) * 100;
        sparkle.style.animation = `
            ${offsetX}px ease-out,
            ${offsetY}px ease-out
        `;
        
        sparkle.animate([
            { transform: 'translate(0, 0)', opacity: 1 },
            { transform: `translate(${offsetX}px, ${offsetY}px)`, opacity: 0 }
        ], {
            duration: 600,
            easing: 'ease-out'
        });
        
        setTimeout(() => {
            sparkle.remove();
        }, 600);
    }
});

// ============================================
// ACTIVE NAV LINK ON SCROLL
// ============================================

window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#ff69b4';
        } else {
            link.style.color = '#fff';
        }
    });
});

// ============================================
// INITIALIZATION ON DOM READY
// ============================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeEffects);
} else {
    initializeEffects();
}

// ============================================
// LOG HELPFUL MESSAGES
// ============================================

console.log('%c💕 Welcome to Your Premium Romantic Website! 💕', 'color: #ff1744; font-size: 20px; font-weight: bold;');
console.log('%cTo customize this website:', 'color: #ff69b4; font-size: 14px; font-weight: bold;');
console.log('%c1. Edit gallery images in index.html (search for EDITABLE)', 'color: #fff;');
console.log('%c2. Replace video URL in index.html', 'color: #fff;');
console.log('%c3. Update your love message in index.html', 'color: #fff;');
console.log('%c4. Set your start date in script.js: CONFIG.startDate', 'color: #fff;');
console.log('%c5. Replace music URL in script.js: CONFIG.musicUrl', 'color: #fff;');
console.log('%c6. Add your own reasons in index.html', 'color: #fff;');
console.log('%c7. Edit love quotes in index.html', 'color: #fff;');