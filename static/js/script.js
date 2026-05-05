// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close Mobile Menu when clicking a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check for saved user preference
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});

// Scroll Reveal Animation (Simple version without IntersectionObserver for robustness)
// You could upgrade this to use IntersectionObserver for better performance
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.section-title, .about-content, .project-card, .skill-category, .timeline-item, .contact-container');

    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
            reveals[i].style.opacity = '1';
            reveals[i].style.transform = 'translateY(0)';
        }
    }
}

// Initial style for reveal elements (handled in JS for simplicity or add to CSS)
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.section-title, .about-content, .project-card, .skill-category, .timeline-item, .contact-container');
    reveals.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
    });
    reveal();
});

// Sliding Navigation Line
const navLinks = document.querySelectorAll('.nav-link');
const slideLine = document.querySelector('.slide-line');
const nav = document.querySelector('.nav-menu');

function moveLine(target) {
    if (!slideLine || !nav || !target) return;

    // Calculate position relative to the UL (.nav-menu)
    const navRect = nav.getBoundingClientRect();
    const linkRect = target.getBoundingClientRect();

    const left = linkRect.left - navRect.left;
    const width = linkRect.width;

    slideLine.style.width = `${width}px`;
    slideLine.style.transform = `translateX(${left}px)`;
    slideLine.style.opacity = '1';
}

if (slideLine && nav && navLinks.length > 0) {
    // Initial position (if existing active class)
    const activeLink = document.querySelector('.nav-link.active');
    if (activeLink) {
        moveLine(activeLink);
    } else {
        moveLine(navLinks[0]);
    }

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', (e) => {
            moveLine(e.target);
        });
    });

    nav.addEventListener('mouseleave', () => {
        // Return to the active link when mouse leaves the menu area
        const active = document.querySelector('.nav-link.active');
        if (active) {
            moveLine(active);
        } else {
            slideLine.style.opacity = '0';
        }
    });
}

// Update active link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
            // If not hovering, move line to new active
            if (slideLine && nav && !nav.matches(':hover')) {
                moveLine(link);
            }
        }
    });
});

// Dynamic Year in Footer
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Projects: show 6 cards by default, toggle to view all
document.addEventListener('DOMContentLoaded', () => {
    const projectsGrid = document.querySelector('.projects-grid');
    const viewProjectsBtn = document.getElementById('view-projects-btn');

    if (!projectsGrid || !viewProjectsBtn) return;

    const totalCards = projectsGrid.querySelectorAll('.project-card').length;

    if (totalCards <= 6) {
        viewProjectsBtn.style.display = 'none';
        return;
    }

    viewProjectsBtn.addEventListener('click', () => {
        const isShowingAll = projectsGrid.classList.toggle('show-all');
        viewProjectsBtn.textContent = isShowingAll ? 'Show Less Projects' : 'View All Projects';
    });
});

// Typing Animation
function type() {
    const typingText = document.querySelector('.typing-text');
    const words = ['Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'UX/UI Designer'];

    if (!typingText) return;

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    // User Configuration
    const typeSpeed = 140;
    const backSpeed = 90;
    const backDelay = 1200;
    const nextWordDelay = 600;

    function typeLoop() {
        const currentWord = words[wordIndex];
        let delay = typeSpeed;

        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            delay = backSpeed;
        } else {
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentWord.length) {
                isDeleting = true;
                delay = backDelay;
            }
        }

        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            delay = nextWordDelay;
        }

        setTimeout(typeLoop, delay);
    }

    typeLoop();
}

// Start animation when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', type);
} else {
    type();
}
