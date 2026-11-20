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
            en: 'Full-stack developer intern project at SomneangPleng Music School (4 Months). Developed user interfaces for student score management using Flutter and Nuxt.js, built features for student, teacher, and administrator workflows, and integrated with NestJS backend APIs.',
            kh: 'គម្រោងកម្មសិក្សា Full-stack នៅសាលាតន្ត្រី SomneangPleng (៤ ខែ)។ បង្កើត UI សម្រាប់គ្រប់គ្រងពិន្ទុសិស្សដោយប្រើ Flutter និង Nuxt.js, បង្កើតមុខងារសម្រាប់សិស្ស គ្រូ និងអ្នកគ្រប់គ្រង និងរួមបញ្ចូលជាមួយ NestJS backend APIs។'
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
            en: 'Virtual Company project (VC2). Collaborated on a Laravel backend for student score management. Worked with database-driven features, REST API integration, and supported role-based access control (RBAC) for administrators, teachers, and students.',
            kh: 'គម្រោង Virtual Company (VC2)។ សហការលើ Laravel backend សម្រាប់គ្រប់គ្រងពិន្ទុសិស្ស។ ធ្វើការជាមួយមុខងារផ្អែកលើមូលដ្ឋានទិន្នន័យ, REST API integration និងគាំទ្រការគ្រប់គ្រងសិទ្ធិតាមតួនាទី (RBAC) សម្រាប់អ្នកគ្រប់គ្រង គ្រូ និងសិស្ស។'
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
        id: 'library-api',
        category: 'backend',
        title: {
            en: 'Library Management REST API',
            kh: 'REST API គ្រប់គ្រងបណ្ណាល័យ'
        },
        desc: {
            en: 'Developed RESTful APIs using Express.js and TypeScript for library management. Connected to MySQL database, organized code with Service, Repository, and Controller layers, implemented JWT authentication and bcrypt password hashing, and tested endpoints with Postman.',
            kh: 'បង្កើត RESTful APIs ដោយប្រើ Express.js និង TypeScript សម្រាប់គ្រប់គ្រងបណ្ណាល័យ។ ភ្ជាប់ទៅមូលដ្ឋានទិន្នន័យ MySQL, រៀបចំកូដជាមួយ Service, Repository និង Controller layers, អនុវត្ត JWT authentication និង bcrypt hashing និងសាកល្បងជាមួយ Postman។'
        },
        tech: ['Node.js', 'Express.js', 'TypeScript', 'MySQL', 'JWT', 'bcrypt', 'Postman'],
        placeholderIcon: 'fas fa-server',
        placeholderBadge: 'Backend REST API',
        links: [
            { label: 'Code', icon: 'fab fa-github', url: 'https://github.com/sreyvik/library_management_system_backend' },
            { label: 'Clean Architecture', icon: 'fas fa-code', isBadge: true }
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
            en: 'A responsive transportation web platform that allows users to book cars online while giving administrators inventory tracking and sales strategy insights.',
            kh: 'គេហទំព័រដឹកជញ្ជូនដែលអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ជិះឡាន និងអ្នកគ្រប់គ្រងអាចដឹងពីយុទ្ធសាស្រ្តលក់រថយន្ត។'
        },
        image: 'static/images/transport-car.png',
        tech: ['HTML', 'CSS', 'JavaScript'],
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
