    /**
 * projects-data.js - Project Definitions & Dynamic Card Renderer
 * Contains projects from CV & Student Score Management System
 */
const PROJECTS_DATA = [
    {
        id: 'sms',
        category: 'fullstack',
        title: {
            en: 'School Management System',
            kh: 'ប្រព័ន្ធគ្រប់គ្រងសាលា'
        },
        desc: {
            en: 'Full-stack internship project at SomneangPleng Music School. Built score management UIs with Flutter and Nuxt.js for student, teacher, and admin workflows, integrated with NestJS REST APIs.',
            kh: 'គម្រោងកម្មសិក្សា Full-stack នៅសាលាតន្ត្រី SomneangPleng។ បង្កើត UI គ្រប់គ្រងពិន្ទុដោយប្រើ Flutter និង Nuxt.js សម្រាប់សិស្ស គ្រូ និងរដ្ឋបាល រួមបញ្ចូលជាមួយ NestJS REST APIs។'
        },
        image: 'static/images/schoolmanagementsystem.jpg',
        tech: ['Flutter', 'Nuxt.js', 'NestJS', 'REST API', 'GitHub'],
        links: [
            { label: 'SomneangPleng Music School', icon: 'fas fa-briefcase', isBadge: true }
        ]
    },
    {
        id: 'ssms',
        category: 'fullstack',
        title: {
            en: 'Student Score Management System',
            kh: 'ប្រព័ន្ធគ្រប់គ្រងពិន្ទុសិស្ស'
        },
        desc: {
            en: 'Virtual Company project (VC2). Developed a database-driven Laravel backend for student score management, featuring role-based access control (RBAC) and RESTful API integration.',
            kh: 'គម្រោង Virtual Company (VC2)។ អភិវឌ្ឍ Laravel backend សម្រាប់គ្រប់គ្រងពិន្ទុសិស្ស រួមមានការគ្រប់គ្រងសិទ្ធិតាមតួនាទី (RBAC) និងការភ្ជាប់ RESTful API។'
        },
        image: 'static/images/studentscoremanagementsystem.jpg',
        tech: ['Laravel', 'Vue.js', 'TypeScript', 'MySQL', 'REST API', 'RBAC'],
        links: [
            { label: 'Back', icon: 'fab fa-github', url: 'https://github.com/G6-PNC-STUDEND-SCORE/G6-PNC-STUDEND-SCORE-BACK.git' },
            { label: 'Front', icon: 'fab fa-github', url: 'https://github.com/G6-PNC-STUDEND-SCORE/G6-PNC-STUDEND-SCORE-FRONT.git' },
            { label: 'Demo', icon: 'fas fa-external-link-alt', url: 'https://pnc-studentscoremanagement.vercel.app/', isAccent: true }
        ]
    },
    {
        id: 'chomnuoy-system',
        category: 'fullstack backend',
        title: {
            en: 'Chomnuoy Donation & Payment REST API',
            kh: 'ប្រព័ន្ធជំនួយសហគមន៍ និងទូទាត់ប្រាក់ (Chomnuoy REST API)'
        },
        desc: {
            en: 'Virtual Company project (VC1). Community aid & donation platform featuring Leaflet GPS material pickups, NBC Bakong KHQR dynamic payments, and real-time SSE notifications.',
            kh: 'គម្រោង Virtual Company (VC1)។ វេទិកាជំនួយសហគមន៍ រួមបញ្ចូលការកំណត់ទីតាំងទទួលសម្ភារៈតាម Leaflet GPS ការទូទាត់ប្រាក់តាម NBC Bakong KHQR និងការបញ្ជូនដំណឹងតាម SSE។'
        },
        image: 'static/images/comnuoy-system.jpg',
        tech: ['Laravel 12', 'React', 'MySQL', 'Bakong KHQR', 'Leaflet', 'SSE'],
        links: [
            { label: 'Front', icon: 'fab fa-github', url: 'https://github.com/sreyvik/Comnuoy_System' },
            { label: 'Back', icon: 'fab fa-github', url: 'https://github.com/sreyvik/VC1---Backend' }
        ]
    },
    {
        id: 'ecommerce',
        category: 'fullstack',
        title: {
            en: 'Full-Stack E-Commerce Platform',
            kh: 'វេទិកាពាណិជ្ជកម្មអេឡិចត្រូនិច (E-Commerce)'
        },
        desc: {
            en: 'Full-stack e-commerce web platform featuring live search, shopping cart, checkout order tracking, and wishlists built with Vue 3, Pinia, and a Laravel Sanctum REST API.',
            kh: 'វេទិកាពាណិជ្ជកម្មអេឡិចត្រូនិច Full-stack មានមុខងារស្វែងរកទំនិញ កន្ត្រកទំនិញ ការបញ្ជាទិញ និង Wishlist បង្កើតដោយ Vue 3, Pinia និង Laravel Sanctum REST API។'
        },
        placeholderIcon: 'fas fa-shopping-cart',
        placeholderBadge: 'Full Stack E-Commerce',
        tech: ['Vue 3', 'TypeScript', 'Pinia', 'TailwindCSS', 'Laravel', 'MySQL'],
        links: [
            { label: 'Front', icon: 'fab fa-github', url: 'https://github.com/sreyvik/Frontend_E' },
            { label: 'Back', icon: 'fab fa-github', url: 'https://github.com/sreyvik/Backend_E' }
        ]
    },
    {
        id: 'library-api',
        category: 'backend',
        title: {
            en: 'Library Management REST API',
            kh: 'REST API គ្រប់គ្រងបណ្ណាល័យ'
        },
        desc: {
            en: 'RESTful backend API for library management built with Express.js, TypeScript, and MySQL. Features layered Service-Repository architecture, JWT auth, and bcrypt hashing.',
            kh: 'RESTful backend API សម្រាប់គ្រប់គ្រងបណ្ណាល័យ បង្កើតដោយ Express.js, TypeScript និង MySQL រៀបចំតាម Service-Repository architecture, JWT auth និង bcrypt hashing។'
        },
        tech: ['Node.js', 'Express.js', 'TypeScript', 'MySQL', 'JWT', 'Postman'],
        placeholderIcon: 'fas fa-server',
        placeholderBadge: 'Backend REST API',
        links: [
            { label: 'Code', icon: 'fab fa-github', url: 'https://github.com/sreyvik/library_management_system_backend' }
        ]
    },
    {
        id: 'mongodb-api',
        category: 'backend',
        title: {
            en: 'Product Catalog REST API with MongoDB',
            kh: 'REST API គ្រប់គ្រងទំនិញជាមួយ MongoDB'
        },
        desc: {
            en: 'PNC Group project (G5). High-performance RESTful API using Node.js, Express 5, and MongoDB with Mongoose ODM. Implemented Controller-Service architecture for catalog & stock control.',
            kh: 'គម្រោងក្រុម PNC (G5)។ RESTful API ប្រសិទ្ធភាពខ្ពស់ដោយប្រើ Node.js, Express 5 និង MongoDB តាមរយៈ Mongoose ODM ជាមួយស្ថាបត្យកម្ម Controller-Service គ្រប់គ្រងទំនិញ និងស្តុក។'
        },
        tech: ['Node.js', 'Express 5', 'TypeScript', 'MongoDB', 'Mongoose', 'REST API'],
        placeholderIcon: 'fas fa-database',
        placeholderBadge: 'MongoDB & Express 5',
        links: [
            { label: 'Code', icon: 'fab fa-github', url: 'https://github.com/lysarl-24/G5-Node-Mongodb' }
        ]
    },
    {
        id: 'transport-car',
        category: 'frontend',
        title: {
            en: 'Transportation Web App',
            kh: 'កម្មវិធីដឹកជញ្ជូន'
        },
        desc: {
            en: 'Responsive transportation web platform allowing users to book cars online while providing administrators with vehicle inventory tracking and sales insights.',
            kh: 'គេហទំព័រដឹកជញ្ជូនដែលអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់កក់រថយន្ត និងអ្នកគ្រប់គ្រងអាចតាមដានស្តុករថយន្ត និងយុទ្ធសាស្រ្តលក់។'
        },
        image: 'static/images/transport-car.png',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
        links: [
            { label: 'Code', icon: 'fab fa-github', url: 'https://github.com/CHANthy-thy/Transport-car' },
            { label: 'Demo', icon: 'fas fa-external-link-alt', url: 'https://transport-brandcar.vercel.app/login.html', isAccent: true }
        ]
    }
];

/**
 * Dynamically renders project cards into #projects-grid
 */
function renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    const lang = (typeof getCurrentLang === 'function') ? getCurrentLang() : (localStorage.getItem('lang') || 'en');

    grid.innerHTML = PROJECTS_DATA.map(p => {
        const titleText = p.title[lang] || p.title.en;
        const descText = p.desc[lang] || p.desc.en;

        const visualHtml = p.image
            ? `<img src="${p.image}" alt="${titleText}" loading="lazy" />`
            : `<div class="project-card-placeholder">
                 <i class="${p.placeholderIcon || 'fas fa-code'}"></i>
                 ${p.placeholderBadge ? `<span class="placeholder-badge">${p.placeholderBadge}</span>` : ''}
               </div>`;

        const techHtml = p.tech.map(t => `<span>${t}</span>`).join('');

        const linksHtml = p.links ? p.links.map(l => {
            if (l.isBadge) {
                return `<span class="btn-sm"><i class="${l.icon}"></i> ${l.label}</span>`;
            }
            const accentClass = l.isAccent ? ' btn-accent' : '';
            return `<a href="${l.url}" target="_blank" rel="noopener noreferrer" class="btn-sm${accentClass}"><i class="${l.icon}"></i> ${l.label}</a>`;
        }).join('') : '';

        return `
          <div class="project-card" data-category="${p.category}" id="proj-${p.id}">
            ${visualHtml}
            <div class="project-content">
              <h3 class="project-title">${titleText}</h3>
              <p class="project-desc">${descText}</p>
              <div class="project-tech">${techHtml}</div>
              <div class="project-links">${linksHtml}</div>
            </div>
          </div>
        `;
    }).join('');
}

window.renderProjects = renderProjects;
