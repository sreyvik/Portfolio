/**
 * main.js - Core UI Interactions & Animations
 * Mobile drawer, Theme switch, Scroll tracking, Typing animation, Cursor, Filtering
 */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. Initial Render: Projects & Particle System
    // ----------------------------------------------------
    if (typeof renderProjects === 'function') {
        renderProjects();
    }

    if (typeof ParticleBackground === 'function') {
        window.particleSystem = new ParticleBackground();
    }

    const savedLang = (typeof getCurrentLang === 'function') ? getCurrentLang() : (localStorage.getItem('lang') || 'en');
    if (typeof setLanguage === 'function') {
        setLanguage(savedLang);
    }

    // ----------------------------------------------------
    // 2. Mobile Menu Drawer
    // ----------------------------------------------------
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // ----------------------------------------------------
    // 3. Sliding Navigation Indicator Line
    // ----------------------------------------------------
    const navLinks = document.querySelectorAll('.nav-link');
    const slideLine = document.querySelector('.slide-line');
    const nav = document.querySelector('.nav-menu');

    function moveLine(target) {
        if (!slideLine || !nav || !target) return;

        if (window.innerWidth > 768) {
            const navRect = nav.getBoundingClientRect();
            const linkRect = target.getBoundingClientRect();
            const left = linkRect.left - navRect.left;
            const width = linkRect.width;

            slideLine.style.width = `${width}px`;
            slideLine.style.transform = `translateX(${left}px) translateY(-50%)`;
            slideLine.style.opacity = '1';
        } else {
            slideLine.style.opacity = '0';
        }
    }

    if (slideLine && nav && navLinks.length > 0) {
        const activeLink = document.querySelector('.nav-link.active') || navLinks[0];
        moveLine(activeLink);

        navLinks.forEach(link => {
            link.addEventListener('mouseenter', (e) => moveLine(e.target));
        });

        nav.addEventListener('mouseleave', () => {
            const active = document.querySelector('.nav-link.active');
            if (active) {
                moveLine(active);
            } else {
                slideLine.style.opacity = '0';
            }
        });
    }

    // ----------------------------------------------------
    // 4. Theme Toggle & Storage
    // ----------------------------------------------------
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = body.getAttribute('data-theme') === 'dark';
            const newTheme = isDark ? 'light' : 'dark';
            
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);

            if (window.particleSystem) {
                window.particleSystem.updateColors();
            }
        });
    }

    function updateThemeIcon(theme) {
        if (!themeIcon) return;
        if (theme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }

    // ----------------------------------------------------
    // 5. Scroll Tracking (Navbar & Progress Bar)
    // ----------------------------------------------------
    const navbar = document.querySelector('.navbar');
    const scrollProgress = document.getElementById('scroll-progress');
    let scrolledState = false;

    window.addEventListener('scroll', () => {
        if (navbar) {
            const isScrolled = window.scrollY > 40;
            if (isScrolled !== scrolledState) {
                scrolledState = isScrolled;
                if (scrolledState) {
                    navbar.classList.add('scroll-scrolled');
                } else {
                    navbar.classList.remove('scroll-scrolled');
                }
            }
        }

        if (scrollProgress) {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
            scrollProgress.style.width = `${progress}%`;
        }

        let current = '';
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 240)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
                if (slideLine && nav && !nav.matches(':hover')) {
                    moveLine(link);
                }
            }
        });
    });

    // ----------------------------------------------------
    // 6. Language Toggle (EN / KH)
    // ----------------------------------------------------
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const currentLang = (typeof getCurrentLang === 'function') ? getCurrentLang() : 'en';
            const newLang = currentLang === 'en' ? 'kh' : 'en';
            if (typeof setLanguage === 'function') {
                setLanguage(newLang);
            }
        });
    }

    // ----------------------------------------------------
    // 7. Custom Magnetic Cursor
    // ----------------------------------------------------
    const cursor = document.getElementById('custom-cursor');
    const cursorDot = document.getElementById('custom-cursor-dot');
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (!isTouchDevice && cursor && cursorDot) {
        cursor.style.opacity = '1';
        cursorDot.style.opacity = '1';

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
        });

        const tick = () => {
            const ease = 0.16;
            cursorX += (mouseX - cursorX) * ease;
            cursorY += (mouseY - cursorY) * ease;

            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;

            requestAnimationFrame(tick);
        };
        tick();

        const attachHover = () => {
            const interactive = document.querySelectorAll('a, button, input, textarea, .filter-btn, .theme-btn, .lang-btn, .social-links a, .skill-icon-card, .interest-card, .project-card');
            interactive.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursor.classList.add('cursor-hover');
                    cursorDot.classList.add('cursor-hover');
                });
                el.addEventListener('mouseleave', () => {
                    cursor.classList.remove('cursor-hover');
                    cursorDot.classList.remove('cursor-hover');
                });
            });
        };
        attachHover();
    }

    // ----------------------------------------------------
    // 8. Project Filtering & Show More/Less
    // ----------------------------------------------------
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectsGrid = document.getElementById('projects-grid');
    const viewProjectsBtn = document.getElementById('view-projects-btn');

    if (filterButtons.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                filterButtons.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');

                const filter = e.target.getAttribute('data-filter');
                filterProjects(filter);
            });
        });

        function filterProjects(filter) {
            const projectCards = document.querySelectorAll('.project-card');
            let visibleCount = 0;

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    card.classList.remove('hide');
                    visibleCount++;
                    
                    setTimeout(() => {
                        card.classList.remove('fade-out');
                        card.classList.add('fade-in');
                    }, 40);
                } else {
                    card.classList.add('fade-out');
                    card.classList.remove('fade-in');
                    
                    setTimeout(() => {
                        card.classList.add('hide');
                    }, 350);
                }
            });

            if (viewProjectsBtn) {
                if (visibleCount <= 6) {
                    viewProjectsBtn.style.display = 'none';
                } else {
                    viewProjectsBtn.style.display = 'inline-block';
                    if (projectsGrid) {
                        projectsGrid.classList.remove('show-all');
                        const lang = (typeof getCurrentLang === 'function') ? getCurrentLang() : 'en';
                        viewProjectsBtn.textContent = (translations['btn-view-all'] && translations['btn-view-all'][lang]) || 'View All Projects';
                    }
                }
            }
        }

        filterProjects('all');
    }

    if (projectsGrid && viewProjectsBtn) {
        viewProjectsBtn.addEventListener('click', () => {
            const isShowingAll = projectsGrid.classList.toggle('show-all');
            const lang = (typeof getCurrentLang === 'function') ? getCurrentLang() : 'en';
            if (isShowingAll) {
                viewProjectsBtn.textContent = (translations['btn-show-less'] && translations['btn-show-less'][lang]) || 'Show Less Projects';
            } else {
                viewProjectsBtn.textContent = (translations['btn-view-all'] && translations['btn-view-all'][lang]) || 'View All Projects';
            }
        });
    }

    // ----------------------------------------------------
    // 9. Intersection Observer Reveal Animations
    // ----------------------------------------------------
    const revealElements = document.querySelectorAll(
        '.section-subtitle, .about-content, .skill-icon-card, .interest-card, .timeline-item, .contact-container'
    );

    if ('IntersectionObserver' in window) {
        revealElements.forEach((el, index) => {
            el.classList.add('reveal-item');
            
            if (el.classList.contains('skill-icon-card') || el.classList.contains('interest-card')) {
                const staggerIndex = (index % 6) + 1;
                el.style.transitionDelay = `${staggerIndex * 0.04}s`;
            }
        });

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -30px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        revealElements.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
    }

    // ----------------------------------------------------
    // 10. Typing Animation
    // ----------------------------------------------------
    function initTyping() {
        const typingText = document.querySelector('.typing-text');
        const words = [
            'Full Stack Developer',
            'Backend Developer',
            'RESTful API Engineer',
            'Node.js & Laravel Dev',
            'Web Developer'
        ];

        if (!typingText) return;

        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeLoop() {
            const currentWord = words[wordIndex];
            let delay = isDeleting ? 60 : 110;

            if (isDeleting) {
                typingText.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                delay = 1800;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                delay = 400;
            }

            setTimeout(typeLoop, delay);
        }

        typeLoop();
    }
    initTyping();

    // ----------------------------------------------------
    // 11. Form Submission & Toast Notifications
    // ----------------------------------------------------
    const contactForm = document.querySelector('.contact-form');
    const toastContainer = document.getElementById('toast-container');

    function showToast(title, message, type = 'success') {
        if (!toastContainer) return;

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;

        const iconClass = type === 'success' ? 'fa-circle-check' : 'fa-circle-xmark';

        toast.innerHTML = `
            <div class="toast-icon"><i class="fas ${iconClass}"></i></div>
            <div class="toast-content">
                <div class="toast-title">${title}</div>
                <div class="toast-message">${message}</div>
            </div>
            <div class="toast-progress"></div>
        `;

        toastContainer.appendChild(toast);

        const progressBar = toast.querySelector('.toast-progress');
        if (progressBar) {
            progressBar.style.transition = 'width 4.5s linear';
            setTimeout(() => {
                progressBar.style.width = '0%';
            }, 50);
        }

        const dismissTimeout = setTimeout(() => {
            dismissToast(toast);
        }, 4500);

        toast.addEventListener('click', () => {
            clearTimeout(dismissTimeout);
            dismissToast(toast);
        });
    }

    function dismissToast(toast) {
        toast.classList.add('toast-slide-out');
        toast.addEventListener('animationend', () => {
            toast.remove();
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            if (submitBtn && submitBtn.disabled) return;

            const originalText = submitBtn.innerHTML;
            const formData = new FormData(contactForm);

            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    showToast(
                        'Message Sent!',
                        'Thank you for reaching out, Sreyvik will get back to you soon!',
                        'success'
                    );
                    contactForm.reset();
                } else {
                    const data = await response.json().catch(() => null);
                    const errorMsg = (() => {
                        if (!data || !data.errors) return 'Please try again in a moment.';
                        const errs = Array.isArray(data.errors) ? data.errors : Object.values(data.errors);
                        return errs
                            .flat()
                            .map(item => (item && typeof item === 'object' ? item.message : item))
                            .filter(Boolean)
                            .join(' ') || 'Please try again in a moment.';
                    })();
                    showToast('Something went wrong', errorMsg, 'error');
                }
            } catch (err) {
                showToast(
                    'Network error',
                    'Could not reach the server. Please check your connection and try again.',
                    'error'
                );
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }
        });
    }

    // ----------------------------------------------------
    // 12. Dynamic Year in Footer
    // ----------------------------------------------------
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
