/**
 * i18n.js - Language dictionary (English & Khmer) and switcher
 * Easily add or edit any translation strings here.
 */
const translations = {
    'nav-home': { en: 'Home', kh: 'ទំព័រដើម' },
    'nav-about': { en: 'About', kh: 'អំពីខ្ញុំ' },
    'nav-skills': { en: 'Skills', kh: 'ជំនាញ' },
    'nav-projects': { en: 'Projects', kh: 'គម្រោង' },
    'nav-experience': { en: 'Experience', kh: 'បទពិសោធន៍' },
    'nav-education': { en: 'Education', kh: 'ការអប់រំ' },
    'nav-contact': { en: 'Contact', kh: 'ទំនាក់ទំនង' },
    'hero-greeting': { en: "Hello, I'm", kh: 'សួស្តី ខ្ញុំគឺ' },
    'hero-iam': { en: "I'm a", kh: 'ខ្ញុំជា' },
    'hero-bio': { en: 'A Full Stack Web Developer based in Phnom Penh, specializing in building secure, reliable backend systems and responsive web applications with modern technologies.', kh: 'អ្នកអភិវឌ្ឍន៍ Full Stack Web Developer មានមូលដ្ឋាននៅភ្នំពេញ ជំនាញផ្នែកបង្កើតប្រព័ន្ធ Backend ដែលមានសុវត្ថិភាព អាចទុកចិត្តបាន និងកម្មវិធីគេហទំព័រដែលឆ្លើយតបជាមួយបច្ចេកវិទ្យាទំនើប។' },
    'hero-btn-work': { en: 'View My Work', kh: 'មើលស្នាដៃរបស់ខ្ញុំ' },
    'hero-btn-cv': { en: 'Download CV', kh: 'ទាញយក CV' },
    'about-title': { en: 'About Me', kh: 'អំពីខ្ញុំ' },
    'about-p1': { en: "Hi, I'm Sreyvik Von — a Full Stack Developer currently studying Web Programming at Passerelles Numériques Cambodia (PNC). I love turning ideas into functional, reliable web products, with a strong focus on backend systems and clean API design.", kh: 'សួស្តី! ខ្ញុំគឺ Sreyvik Von ជា Full Stack Developer និងជានិស្សិតផ្នែក Web Programming នៅ Passerelles Numériques Cambodia (PNC)។ ខ្ញុំចូលចិត្តបំប្លែងគំនិតទៅជាគេហទំព័រដែលមានប្រសិទ្ធភាព និងអាចទុកចិត្តបាន ដោយផ្តោតសំខាន់លើប្រព័ន្ធ Backend និងការរចនា API ស្អាត។' },
    'about-p2': { en: "I build applications using Node.js, Express, TypeScript, PHP, and Laravel. When developing backend systems, I emphasize clean architecture — separating business logic with Service and Repository patterns, securing endpoints with JWT & RBAC, and keeping code maintainable and well-tested.", kh: 'ខ្ញុំបង្កើតកម្មវិធីដោយប្រើ Node.js, Express, TypeScript, PHP និង Laravel។ នៅពេលបង្កើតប្រព័ន្ធ backend ខ្ញុំយកចិត្តទុកដាក់លើ clean architecture ដោយបំបែកកូដតាម Service និង Repository patterns ការពារ endpoints ជាមួយ JWT & RBAC និងសរសេរកូដដែលងាយស្រួលថែទាំ និងធ្វើតេស្ត។' },
    'about-p3': { en: "During my 4-month internship at SomneangPleng Music School and collaborative team projects, I developed a strong habit of Git version control, proactive communication, and agile team delivery. I'm eager to bring my skills to an engineering team where I can solve real challenges and keep growing.", kh: 'ក្នុងអំឡុងពេលកម្មសិក្សា ៤ ខែនៅសាលាតន្ត្រី SomneangPleng និងគម្រោងជាក្រុម ខ្ញុំបានពង្រឹងទម្លាប់ធ្វើការជាមួយ Git ការប្រាស្រ័យទាក់ទងយ៉ាងសកម្ម និងការធ្វើការតាមបែប Agile។ ខ្ញុំត្រៀមខ្លួនជាស្រេចក្នុងការនាំយកជំនាញរបស់ខ្ញុំទៅកាន់ក្រុមការងារវិស្វកម្ម ដើម្បីដោះស្រាយបញ្ហាពិតប្រាកដ និងបន្តអភិវឌ្ឍន៍ខ្លួន។' },
    'about-focus-title': { en: 'Core Technical Focus', kh: 'ការផ្តោតបច្ចេកទេសស្នូល' },
    'focus-backend': { en: 'Backend & RESTful APIs', kh: 'Backend & RESTful APIs' },
    'focus-backend-desc': { en: 'Designing scalable RESTful APIs with Node.js, Express, TypeScript, PHP & Laravel.', kh: 'ការរចនា RESTful APIs ដែលអាចពង្រីកបានជាមួយ Node.js, Express, TypeScript, PHP និង Laravel។' },
    'focus-architecture': { en: 'Clean Architecture & OOP', kh: 'Clean Architecture & OOP' },
    'focus-architecture-desc': { en: 'Service, Repository & Controller patterns, modular code, and Postman API testing.', kh: 'គំរូ Service, Repository និង Controller, កូដម៉ូឌុល និងការធ្វើតេស្ត API ជាមួយ Postman។' },
    'focus-security': { en: 'Security, JWT & RBAC', kh: 'Security, JWT & RBAC' },
    'focus-security-desc': { en: 'JWT authentication, bcrypt password hashing, and Role-Based Access Control.', kh: 'ការផ្ទៀងផ្ទាត់ JWT, bcrypt password hashing និងការគ្រប់គ្រងសិទ្ធិតាមតួនាទី (RBAC)។' },
    'focus-agile': { en: 'Agile & Team Collaboration', kh: 'Agile & ការសហការជាក្រុម' },
    'focus-agile-desc': { en: 'Agile/Scrum sprints, Git/GitHub workflows, Jira tracking, and proactive problem-solving.', kh: 'ដំណើរការការងារ Agile/Scrum, Git/GitHub, ការតាមដានកិច្ចការលើ Jira និងការដោះស្រាយបញ្ហាប្រកបដោយប្រសិទ្ធភាព។' },
    'about-btn': { en: "Let's Collaborate", kh: 'សូមសហការ' },
    'skills-title': { en: 'My Skills', kh: 'ជំនាញរបស់ខ្ញុំ' },
    'projects-title': { en: 'My Projects', kh: 'គម្រោងរបស់ខ្ញុំ' },
    'filter-all': { en: 'All', kh: 'ទាំងអស់' },
    'filter-fullstack': { en: 'Full Stack', kh: 'Full Stack' },
    'filter-frontend': { en: 'Frontend', kh: 'Frontend' },
    'filter-backend': { en: 'Backend', kh: 'Backend' },
    'filter-uiux': { en: 'UI/UX Design', kh: 'UI/UX រចនា' },
    'btn-view-all': { en: 'View All Projects', kh: 'មើលគម្រោងទាំងអស់' },
    'btn-show-less': { en: 'Show Less Projects', kh: 'បង្ហាញគម្រោងតិច' },
    'exp-section-my': { en: 'Work', kh: 'បទពិសោធន៍' },
    'exp-section-word': { en: 'Experience', kh: 'ការងារ' },
    'wk1-date': { en: '4 Months', kh: '៤ ខែ' },
    'wk1-title': { en: 'Full-Stack Developer Intern', kh: 'កម្មសិក្សា Full-Stack Developer' },
    'wk1-desc': { en: 'Project: School Management System. Developed user interfaces for student score management using Flutter and Nuxt.js. Built features for student, teacher, and administrator workflows. Integrated frontend features with backend APIs developed using NestJS. Collaborated with a three-member team using GitHub.', kh: 'គម្រោង: ប្រព័ន្ធគ្រប់គ្រងសាលា។ បង្កើត UI សម្រាប់គ្រប់គ្រងពិន្ទុសិស្សដោយប្រើ Flutter និង Nuxt.js។ បង្កើតមុខងារសម្រាប់សិស្ស គ្រូ និងអ្នកគ្រប់គ្រង។ រួមបញ្ចូលជាមួយ NestJS backend APIs។ សហការជាមួយក្រុមបីនាក់ដោយប្រើ GitHub។' },
    'wk2-date': { en: '1 Month', kh: '១ ខែ' },
    'wk2-title': { en: 'VC2 (Virtual Company II)', kh: 'VC2 (Virtual Company II)' },
    'wk2-desc': { en: 'Project: Student Score Management System. Collaborated on a Laravel backend for student score management. Worked with database-driven features and REST API integration. Supported role-based access control (RBAC) for administrators, teachers, and students. Coordinated team activities.', kh: 'គម្រោង: ប្រព័ន្ធគ្រប់គ្រងពិន្ទុសិស្ស។ សហការលើ Laravel backend សម្រាប់គ្រប់គ្រងពិន្ទុសិស្ស។ ធ្វើការជាមួយមុខងារដែលផ្អែកលើមូលដ្ឋានទិន្នន័យ និង REST API integration។ គាំទ្រការគ្រប់គ្រងសិទ្ធិតាមតួនាទី (RBAC) សម្រាប់អ្នកគ្រប់គ្រង គ្រូ និងសិស្ស។' },
    'wk3-date': { en: '2 Weeks', kh: '២ សប្តាហ៍' },
    'wk3-title': { en: 'Node.js Project Experience', kh: 'បទពិសោធន៍គម្រោង Node.js' },
    'wk3-desc': { en: 'Project: Library Management REST API. Developed RESTful APIs using Express.js and TypeScript for library management. Connected application services to a MySQL database to manage library records. Organized code using Service, Repository, and Controller layers. Implemented JWT authentication and password hashing with bcrypt. Tested API endpoints using Postman.', kh: 'គម្រោង: REST API គ្រប់គ្រងបណ្ណាល័យ។ បង្កើត RESTful APIs ដោយប្រើ Express.js និង TypeScript សម្រាប់គ្រប់គ្រងបណ្ណាល័យ។ ភ្ជាប់ទៅមូលដ្ឋានទិន្នន័យ MySQL។ រៀបចំកូដដោយប្រើ Service, Repository និង Controller layers។ អនុវត្ត JWT authentication និង bcrypt hashing។ សាកល្បង endpoints ជាមួយ Postman។' },
    'edu-section-my': { en: 'My', kh: 'ប្រវត្តិ' },
    'edu-section-word': { en: 'Education', kh: 'ការអប់រំ' },
    'tl1-date': { en: '2025 - 2026', kh: '២០២៥ - ២០២៦' },
    'tl1-title': { en: 'Associate Degree in Web Development', kh: 'សញ្ញាបត្រជាន់ខ្ពស់ផ្នែកអភិវឌ្ឍន៍គេហទំព័រ' },
    'tl1-desc': { en: 'Comprehensive training in modern web technologies including Node.js, Express.js, TypeScript, PHP, Laravel, MySQL, RESTful API development, database architecture, software development methodologies, and professional soft skills.', kh: 'ការបណ្តុះបណ្តាលយ៉ាងទូលំទូលាយផ្នែកបច្ចេកវិទ្យាគេហទំព័រទំនើបរួមទាំង Node.js, Express.js, TypeScript, PHP, Laravel, MySQL, ការអភិវឌ្ឍន៍ RESTful API ស្ថាបត្យកម្មមូលដ្ឋានទិន្នន័យ វិធីសាស្រ្តអភិវឌ្ឍន៍កម្មវិធី និងជំនាញវិជ្ជាជីវៈ។' },
    'tl2-date': { en: '2024', kh: '២០២៤' },
    'tl2-title': { en: 'High School Diploma', kh: 'សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ' },
    'tl2-desc': { en: 'Successfully completed high school education and passed the National Upper Secondary School Examination (Baccalaureate) in Anlong Vil.', kh: 'បានបញ្ចប់ការសិក្សាវិទ្យាល័យដោយជោគជ័យ និងប្រឡងជាប់សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ (បាក់ឌុប) នៅ អន្លង់វិល។' },
    'contact-title': { en: 'Get In Touch', kh: 'ទំនាក់ទំនង' },
    'contact-info-title': { en: 'Contact Information', kh: 'ព័ត៌មានទំនាក់ទំនង' },
    'contact-info-desc': { en: 'I am currently looking for an internship or junior full stack developer role where I can contribute to real-world projects, learn from experienced engineers, and build secure, maintainable software. Feel free to connect!', kh: 'បច្ចុប្បន្នខ្ញុំកំពុងស្វែងរកឱកាសកម្មសិក្សា ឬតួនាទី Junior Full Stack Developer ដែលខ្ញុំអាចរួមចំណែកដល់គម្រោងពិតប្រាកដ រៀនពីវិស្វករដែលមានបទពិសោធន៍ និងបង្កើតកម្មវិធីដែលមានសុវត្ថិភាព។ សូមទាក់ទងមកខ្ញុំ!' },
    'contact-address': { en: 'Street 371, Khan Sen Sok, Phnom Penh', kh: 'ផ្លូវ ៣៧១ ខណ្ឌសែនសុខ ភ្នំពេញ' },
    'form-name': { en: 'Name', kh: 'ឈ្មោះ' },
    'form-name-ph': { en: 'Your Name', kh: 'ឈ្មោះរបស់អ្នក' },
    'form-email': { en: 'Email', kh: 'អ៊ីមែល' },
    'form-email-ph': { en: 'Your Email', kh: 'អ៊ីមែលរបស់អ្នក' },
    'form-message': { en: 'Message', kh: 'សារ' },
    'form-msg-ph': { en: 'Your Message', kh: 'សាររបស់អ្នក' },
    'form-submit': { en: 'Send Message', kh: 'ផ្ញើសារ' },
    'footer-desc': { en: 'Full Stack Web Developer & Student at Passerelles Numériques Cambodia. Passionate about building secure, reliable, and maintainable backend systems.', kh: 'Full Stack Web Developer និងជាសិស្សនៅ Passerelles Numériques Cambodia។ មានចំណង់ចំណូលចិត្តក្នុងការបង្កើតប្រព័ន្ធ Backend ដែលមានសុវត្ថិភាព អាចទុកចិត្តបាន និងអាចថែរក្សាបាន។' }
};

function getCurrentLang() {
    return localStorage.getItem('lang') || 'en';
}

function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('lang', lang === 'kh' ? 'km' : 'en');
    document.documentElement.setAttribute('data-lang', lang);

    if (lang === 'kh') {
        document.body.style.fontFamily = "'Noto Serif Khmer', 'Inter', sans-serif";
    } else {
        document.body.style.fontFamily = "'Inter', sans-serif";
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key] && translations[key][lang]) {
            el.textContent = translations[key][lang];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[key] && translations[key][lang]) {
            el.setAttribute('placeholder', translations[key][lang]);
        }
    });

    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        const enSpan = langToggle.querySelector(':scope > .lang-en');
        const khSpan = langToggle.querySelector(':scope > .lang-kh');
        if (enSpan && khSpan) {
            enSpan.classList.toggle('active', lang === 'en');
            khSpan.classList.toggle('active', lang === 'kh');
        }
    }

    // Update dynamic project cards text if available
    if (window.renderProjects) {
        window.renderProjects();
    }
}
