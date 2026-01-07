// ========================================
// INITIALIZE AOS (Animate On Scroll)
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
});

// ========================================
// NAVIGATION
// ========================================

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Active link on scroll
function setActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', setActiveLink);

// ========================================
// THEME TOGGLE (DARK/LIGHT MODE)
// ========================================

const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', currentTheme);

// Theme toggle click handler
themeToggle.addEventListener('click', () => {
    const theme = htmlElement.getAttribute('data-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// ========================================
// SMOOTH SCROLL
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// SCROLL TO TOP BUTTON
// ========================================

const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// COUNTER ANIMATION FOR STATS
// ========================================

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const duration = 2000; // 2 seconds
    const stepTime = duration / 100;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, stepTime);
}

// Intersection Observer for stats animation
const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    animateCounter(stat, target);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    statsObserver.observe(statsSection);
}

// ========================================
// CONTACT FORM HANDLING
// ========================================

const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

// Check if URL has success parameter
if (window.location.search.includes('success=true')) {
    if (contactForm && formSuccess) {
        contactForm.style.display = 'none';
        formSuccess.classList.add('show');

        // Remove success parameter from URL
        window.history.replaceState({}, document.title, window.location.pathname);

        // Reset after 5 seconds
        setTimeout(() => {
            contactForm.reset();
            contactForm.style.display = 'grid';
            formSuccess.classList.remove('show');
        }, 5000);
    }
}

// ========================================
// FORM VALIDATION
// ========================================

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Real-time validation
const emailInput = document.getElementById('email');
if (emailInput) {
    emailInput.addEventListener('blur', function() {
        if (!validateEmail(this.value) && this.value !== '') {
            this.style.borderColor = '#ef4444';
        } else {
            this.style.borderColor = '';
        }
    });
}

// ========================================
// PARALLAX EFFECT ON HERO
// ========================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');

    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / 600);
    }
});

// ========================================
// SERVICE CARDS TILT EFFECT
// ========================================

const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });

    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ========================================
// LAZY LOADING FOR IMAGES
// ========================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// TYPING EFFECT FOR HERO TITLE
// ========================================

function typeWriter(element, text, speed = 80) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    setTimeout(() => {
        type();
    }, 500);
}

// Apply typing effect to hero highlight text
const typingText = document.getElementById('typingText');
if (typingText) {
    typeWriter(typingText, 'Mejor Versión');
}

// ========================================
// CURSOR CUSTOM EFFECT (Optional Advanced Feature)
// ========================================

/*
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
    element.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
});

// Add to CSS:
.custom-cursor {
    width: 20px;
    height: 20px;
    border: 2px solid var(--primary-color);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: all 0.1s ease;
}

.custom-cursor.cursor-hover {
    transform: scale(1.5);
    background: rgba(255, 107, 53, 0.2);
}
*/

// ========================================
// PAGE LOAD ANIMATION
// ========================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ========================================
// PRELOADER
// ========================================

window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// ========================================
// CONSOLE MESSAGE
// ========================================

console.log(
    '%c¡Bienvenido a FitCoach! 💪',
    'color: #ff6b35; font-size: 24px; font-weight: bold;'
);
console.log(
    '%cSitio desarrollado con HTML, CSS y JavaScript vanilla',
    'color: #1a759f; font-size: 14px;'
);

// ========================================
// PERFORMANCE MONITORING (Optional)
// ========================================

/*
if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${pageLoadTime}ms`);
    });
}
*/

// ========================================
// SERVICE WORKER FOR PWA (Optional)
// ========================================

/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker registered:', registration);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}
*/

// ========================================
// ANALYTICS TRACKING (Optional)
// ========================================

/*
// Google Analytics 4
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX'); // Reemplaza con tu ID de Google Analytics

// Track button clicks
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.querySelector('span')?.textContent || 'Unknown Button';
        gtag('event', 'button_click', {
            'event_category': 'engagement',
            'event_label': buttonText
        });
    });
});
*/

// ========================================
// EASTER EGG (Fun Feature)
// ========================================

let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiPattern.join(',')) {
        document.body.style.animation = 'rainbow 2s linear infinite';
        console.log('🎉 ¡Código Konami activado! ¡Sigue entrenando duro!');

        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// Add to CSS for rainbow effect:
/*
@keyframes rainbow {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
}
*/
