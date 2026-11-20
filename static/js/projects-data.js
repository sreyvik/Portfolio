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
        id: 'chomnuoy-system',
        category: 'fullstack backend',
        title: {
            en: 'Chomnuoy Donation & Payment REST API',
            kh: 'ប្រព័ន្ធជំនួយសហគមន៍ និងទូទាត់ប្រាក់ (Chomnuoy REST API)'
        },
        desc: {
            en: 'Virtual Company project (VC1). A comprehensive community fundraising and material donation platform. Combines a React frontend featuring interactive GPS material pickup with Leaflet maps and QR verification, alongside a robust Laravel 12 backend integrating NBC Bakong KHQR dynamic payments, ABA PayWay checkout, real-time Server-Sent Events (SSE) notifications, Google OAuth, and Docker containerization.',
            kh: 'គម្រោង Virtual Company (VC1)។ វេទិកាជំនួយសហគមន៍ ការរៃអង្គាសប្រាក់ និងបរិច្ចាគសម្ភារៈពេញលេញ។ រួមបញ្ចូលគ្នានូវ React frontend ដែលមានផែនទី Leaflet & GPS សម្រាប់កំណត់ទីតាំងទទួលសម្ភារៈ និងការផ្ទៀងផ្ទាត់ QR code ជាមួយ Laravel 12 backend ដ៏រឹងមាំ ដែលរួមមានការទូទាត់ប្រាក់តាម NBC Bakong KHQR, ប្រតិបត្តិការ ABA PayWay, ការបញ្ជូនដំណឹងតាម Server-Sent Events (SSE) ភ្លាមៗ, Google OAuth និង Docker containerization។'
        },
        image: 'static/images/comnuoy-system.jpg',
        tech: ['Laravel 12', 'React', 'MySQL', 'Bakong KHQR', 'Leaflet', 'TailwindCSS', 'SSE', 'Docker'],
        links: [
            { label: 'Front', icon: 'fab fa-github', url: 'https://github.com/sreyvik/Comnuoy_System' },
            { label: 'Back', icon: 'fab fa-github', url: 'https://github.com/sreyvik/VC1---Backend' },
            { label: 'Bakong KHQR', icon: 'fas fa-qrcode', isBadge: true }
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
            en: 'A modern e-commerce web platform featuring product catalog browsing, instant search, shopping cart management, checkout with order tracking, user wishlists, and customer reviews. Built with Vue 3, TypeScript, Pinia state management, and a Laravel Sanctum RESTful API backend.',
            kh: 'កម្មវិធីគេហទំព័រពាណិជ្ជកម្មអេឡិចត្រូនិចទំនើប ដែលមានមុខងារស្វែងរកទំនិញ កន្ត្រកទំនិញ ការបញ្ជាទិញ និងតាមដានការដឹកជញ្ជូន បញ្ជីទំនិញពេញចិត្ត (Wishlist) និងការវាយតម្លៃពីអតិថិជន។ បង្កើតឡើងដោយ Vue 3, TypeScript, Pinia និង Laravel Sanctum RESTful API backend។'
        },
        placeholderIcon: 'fas fa-shopping-cart',
        placeholderBadge: 'Full Stack E-Commerce',
        tech: ['Vue 3', 'TypeScript', 'Pinia', 'TailwindCSS', 'Vite', 'Laravel', 'Sanctum', 'MySQL'],
        links: [
            { label: 'Front', icon: 'fab fa-github', url: 'https://github.com/sreyvik/Frontend_E' },
            { label: 'Back', icon: 'fab fa-github', url: 'https://github.com/sreyvik/Backend_E' },
            { label: 'E-Commerce', icon: 'fas fa-store', isBadge: true }
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
        id: 'mongodb-api',
        category: 'backend',
        title: {
            en: 'Product Catalog REST API with MongoDB',
            kh: 'REST API គ្រប់គ្រងទំនិញជាមួយ MongoDB'
        },
        desc: {
            en: 'PNC Group project (G5). Developed a high-performance RESTful API using Node.js, Express 5, and TypeScript connected to MongoDB with Mongoose ODM. Implemented clean Controller-Service architecture for product catalog operations, pricing calculations, stock control, and multi-image schemas.',
            kh: 'គម្រោងក្រុម PNC (G5)។ បង្កើត RESTful API ប្រកបដោយប្រសិទ្ធភាពខ្ពស់ដោយប្រើ Node.js, Express 5 និង TypeScript ភ្ជាប់ទៅ MongoDB តាមរយៈ Mongoose ODM។ អនុវត្តស្ថាបត្យកម្ម Controller-Service សម្រាប់ការគ្រប់គ្រងទំនិញ ការគណនាតម្លៃទំនិញបញ្ចុះតម្លៃ ការគ្រប់គ្រងស្តុក និងរូបភាពទំនិញ។'
        },
        tech: ['Node.js', 'Express 5', 'TypeScript', 'MongoDB', 'Mongoose', 'REST API'],
        placeholderIcon: 'fas fa-database',
        placeholderBadge: 'MongoDB & Express 5',
        links: [
            { label: 'Code', icon: 'fab fa-github', url: 'https://github.com/lysarl-24/G5-Node-Mongodb' },
            { label: 'PNC Group 5', icon: 'fas fa-users', isBadge: true }
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
