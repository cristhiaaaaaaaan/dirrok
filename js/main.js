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
// 3D HERO CAROUSEL (ELITE VERSION)
// ========================================

class HeroCarousel {
    constructor() {
        this.slides = document.querySelectorAll('.carousel-slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.prevBtn = document.querySelector('.carousel-prev');
        this.nextBtn = document.querySelector('.carousel-next');
        this.carousel = document.querySelector('.hero-carousel');
        this.currentSlide = 0;
        this.totalSlides = this.slides.length;
        this.autoPlayInterval = null;
        this.autoPlayDelay = 5000; // 5 seconds

        // Tilt effect properties
        this.tiltEnabled = true;
        this.maxTilt = 5; // degrees

        // Reactive background
        this.canvas = document.getElementById('reactiveCanvas');
        this.ctx = this.canvas?.getContext('2d');
        this.bgContainer = document.querySelector('.carousel-reactive-bg');

        this.init();
    }

    init() {
        if (this.slides.length === 0) return;

        // Set initial slide
        this.updateSlides();

        // Event listeners
        this.prevBtn?.addEventListener('click', () => this.prevSlide());
        this.nextBtn?.addEventListener('click', () => this.nextSlide());

        // Indicator clicks
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });

        // Touch/Swipe support
        this.addSwipeSupport();

        // Auto-play
        this.startAutoPlay();

        // Pause on hover
        this.carousel?.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.carousel?.addEventListener('mouseleave', () => this.startAutoPlay());

        // Tilt effect with mouse
        this.addTiltEffect();

        // Reactive background
        this.initReactiveBackground();
    }

    updateSlides() {
        this.slides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev', 'next');

            if (index === this.currentSlide) {
                slide.classList.add('active');
            } else if (index === this.getPrevIndex()) {
                slide.classList.add('prev');
            } else if (index === this.getNextIndex()) {
                slide.classList.add('next');
            }
        });

        // Update indicators
        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentSlide);
        });

        // Update reactive background
        this.updateReactiveBackground();
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.updateSlides();
        this.restartAutoPlay();
    }

    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.updateSlides();
        this.restartAutoPlay();
    }

    goToSlide(index) {
        this.currentSlide = index;
        this.updateSlides();
        this.restartAutoPlay();
    }

    getPrevIndex() {
        return (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    }

    getNextIndex() {
        return (this.currentSlide + 1) % this.totalSlides;
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoPlayDelay);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }

    restartAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }

    addSwipeSupport() {
        const carousel = document.querySelector('.hero-carousel');
        let touchStartX = 0;
        let touchEndX = 0;

        carousel?.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        carousel?.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });

        const handleSwipe = () => {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }
        };

        this.handleSwipe = handleSwipe;
    }

    // ========================================
    // TILT EFFECT WITH MOUSE (PARALLAX 3D)
    // ========================================
    addTiltEffect() {
        if (!this.tiltEnabled || !this.carousel) return;

        this.carousel.addEventListener('mousemove', (e) => {
            const activeSlide = document.querySelector('.carousel-slide.active');
            if (!activeSlide) return;

            const rect = this.carousel.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Calculate rotation based on mouse position
            const rotateX = ((y - centerY) / centerY) * this.maxTilt;
            const rotateY = ((centerX - x) / centerX) * this.maxTilt;

            // Apply transform with smooth transition
            activeSlide.style.transform = `
                translateX(0)
                rotateY(${rotateY}deg)
                rotateX(${rotateX}deg)
                scale(1)
                translateZ(20px)
            `;
        });

        this.carousel.addEventListener('mouseleave', () => {
            const activeSlide = document.querySelector('.carousel-slide.active');
            if (!activeSlide) return;

            // Reset to original position
            activeSlide.style.transform = 'translateX(0) rotateY(0deg) rotateX(0deg) scale(1) translateZ(0)';
        });
    }

    // ========================================
    // REACTIVE BACKGROUND (COLOR EXTRACTION)
    // ========================================
    initReactiveBackground() {
        if (!this.canvas || !this.ctx) return;

        // Set canvas size
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());

        // Update background when slide changes
        this.updateReactiveBackground();
    }

    resizeCanvas() {
        if (!this.canvas) return;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    updateReactiveBackground() {
        const activeSlide = this.slides[this.currentSlide];
        const img = activeSlide?.querySelector('img');

        if (!img || !this.ctx || !this.canvas) return;

        // Wait for image to load
        if (!img.complete) {
            img.addEventListener('load', () => this.drawReactiveBackground(img), { once: true });
        } else {
            this.drawReactiveBackground(img);
        }
    }

    drawReactiveBackground(img) {
        if (!this.ctx || !this.canvas || !this.bgContainer) return;

        try {
            // Create temporary canvas to extract colors
            const tempCanvas = document.createElement('canvas');
            const tempCtx = tempCanvas.getContext('2d');
            tempCanvas.width = 100;
            tempCanvas.height = 100;

            // Draw scaled down image
            tempCtx.drawImage(img, 0, 0, 100, 100);

            // Get average color from center region
            const imageData = tempCtx.getImageData(30, 30, 40, 40);
            const data = imageData.data;
            let r = 0, g = 0, b = 0;

            for (let i = 0; i < data.length; i += 4) {
                r += data[i];
                g += data[i + 1];
                b += data[i + 2];
            }

            const pixelCount = data.length / 4;
            r = Math.floor(r / pixelCount);
            g = Math.floor(g / pixelCount);
            b = Math.floor(b / pixelCount);

            // Create gradient background
            const gradient = this.ctx.createRadialGradient(
                this.canvas.width / 2, this.canvas.height / 2, 0,
                this.canvas.width / 2, this.canvas.height / 2, this.canvas.width / 1.5
            );

            gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.8)`);
            gradient.addColorStop(0.5, `rgba(${r * 0.6}, ${g * 0.6}, ${b * 0.6}, 0.5)`);
            gradient.addColorStop(1, `rgba(${r * 0.3}, ${g * 0.3}, ${b * 0.3}, 0.2)`);

            // Clear and draw
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.fillStyle = gradient;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            // Show background
            this.bgContainer.classList.add('active');
        } catch (error) {
            // CORS error or image not loaded - use fallback gradient
            console.warn('Reactive background failed (CORS), using fallback:', error.message);

            // Fallback: use default orange gradient
            const gradient = this.ctx.createRadialGradient(
                this.canvas.width / 2, this.canvas.height / 2, 0,
                this.canvas.width / 2, this.canvas.height / 2, this.canvas.width / 1.5
            );

            gradient.addColorStop(0, 'rgba(255, 107, 53, 0.6)');
            gradient.addColorStop(0.5, 'rgba(212, 72, 21, 0.4)');
            gradient.addColorStop(1, 'rgba(26, 31, 58, 0.2)');

            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.fillStyle = gradient;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            this.bgContainer.classList.add('active');
        }
    }
}

// Initialize carousel when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new HeroCarousel();
});

// ========================================
// PARALLAX EFFECT ON HERO
// ========================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-carousel');

    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
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
