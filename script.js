document.addEventListener('DOMContentLoaded', () => {
    // Translations
    const translations = {
        de: {
            nav_about: "Über mich",
            nav_skills: "Kompetenzen",
            nav_experience: "Erfahrung",
            nav_projects: "Projekte",
            nav_contact: "Kontakt",
            hero_greeting: "Hallo, ich bin",
            hero_occupation: "Kognitionswissenschaftlerin",
            hero_description: "Ich verbinde Informatik und Psychologie, um intuitive und intelligente Lösungen zu schaffen. Mein Fokus liegt auf Data Science und Human-AI Interaction.",
            btn_contact: "Kontaktieren",
            btn_projects: "Meine Projekte",
            about_title: "Über mich",
            education_title: "Ausbildung",
            edu_master_title: "M. Sc. Kognitionswissenschaft",
            edu_uni_tuebingen: "Universität Tübingen",
            focus_label: "Schwerpunkte:",
            edu_master_focus: "Data Science, Human-AI Interaction",
            thesis_label: "Masterarbeit:",
            edu_bachelor_title: "B. Sc. Kognitionswissenschaft",
            grade_label: "Note",
            edu_bachelor_focus: "Machine Learning, Human-Computer Interaction",
            bachelor_thesis_label: "Bachelorarbeit:",
            edu_business_title: "Grundstudium Betriebswirtschaft",
            edu_fh_pforzheim: "Fachhochschule Pforzheim",
            international_title: "International",
            int_oslo: "Auslandssemester an der Universitetet i Oslo, Norwegen (6 Monate, 2022)",
            int_korea: "Aufenthalt in Südkorea (6 Wochen, 2024)",
            int_travel: "Reisen nach Namibia, Island, Brasilien",
            languages_title: "Sprachen",
            lang_german: "Deutsch (Muttersprache)",
            lang_english: "Englisch (C1)",
            skills_title: "Kompetenzen",
            skills_prog_data: "Programming & Data",
            skills_web_design: "Web & Design",
            skills_tools: "Tools",
            experience_title: "Berufserfahrung",
            exp_ai_center_title: "Stud. Mitarbeiterin in Produktentwicklung",
            exp_ai_center_1: "Durchführung von Anforderungsanalysen",
            exp_ai_center_2: "Entwicklung des Produkts von der Ideenfindung bis zum Launch",
            exp_itdesign_student_title: "Werkstudentin in Data Analysis/Data Science",
            exp_itdesign_student_1: "Analyse von Nutzungsdaten zur Identifizierung von Mustern und Trends mithilfe von Machine Learning",
            exp_itdesign_student_2: "Entwicklung von Dashboards und Reports",
            exp_itdesign_intern_title: "Praktikantin in Data Analysis/Data Science",
            exp_tutor_title: "Tutorin für Mathematik",
            exp_uni_tuebingen_math: "Universität Tübingen",
            exp_tutor_1: "Vorbereitung und Durchführung wöchentlicher Übungen",
            exp_tutor_2: "Korrektur und Bewertung von Hausaufgaben und Prüfungen",
            projects_title: "Projekte",
            proj_museum_title: "LLM as a Virtual Museum Guide",
            proj_museum_desc: "Entwicklung eines virtuellen Museumsführers basierend auf Large Language Models.",
            proj_emotion_title: "Multilinguale Emotionserkennung",
            proj_emotion_desc: "Projekt zur Erkennung von Emotionen in verschiedenen Sprachen mithilfe von Machine Learning Algorithmen.",
            proj_sportapp_title: "UX/UI Design für Sportapp",
            proj_sportapp_desc: "Konzeption des User Interface und der User Experience für eine mobile Sportanwendung.",
            interests_engagement_title: "Interessen & Engagement",
            interests_title: "Interessen",
            int_dance: "Tanz und Theater",
            int_guitar: "Gitarre spielen",
            int_travel_int: "Reisen",
            int_video: "Videos schneiden",
            int_games: "Gesellschaftsspiele",
            engagement_title: "Engagement",
            role_mentor: "Mentorin",
            eng_cybermentor: "bei CyberMentor (seit 10/2025)",
            role_course_instructor: "Kursleiterin",
            eng_it4kids: "bei It4kids (2024)",
            role_buddy: "Buddy",
            eng_buddy: "für internationale Studierende (2022-2024)",
            role_youth_leader: "Jugendgruppenleiterin",
            eng_cvjm: "CVJM (2015-2018)",
            footer_title: "Lass uns zusammenarbeiten",
            footer_text: "Ich freue mich auf neue Herausforderungen und spannende Projekte.",
            footer_location: "Tübingen, Deutschland",
            footer_rights: "Alle Rechte vorbehalten."
        },
        en: {
            nav_about: "About Me",
            nav_skills: "Skills",
            nav_experience: "Experience",
            nav_projects: "Projects",
            nav_contact: "Contact",
            hero_greeting: "Hello, I am",
            hero_occupation: "Cognitive Scientist",
            hero_description: "I combine Computer Science and Psychology to create intuitive and intelligent solutions. My focus is on Data Science and Human-AI Interaction.",
            btn_contact: "Contact Me",
            btn_projects: "My Projects",
            about_title: "About Me",
            education_title: "Education",
            edu_master_title: "M. Sc. Cognitive Science",
            edu_uni_tuebingen: "University of Tübingen",
            focus_label: "Focus:",
            edu_master_focus: "Data Science, Human-AI Interaction",
            thesis_label: "Master Thesis:",
            edu_bachelor_title: "B. Sc. Cognitive Science",
            grade_label: "Grade",
            edu_bachelor_focus: "Machine Learning, Human-Computer Interaction",
            bachelor_thesis_label: "Bachelor Thesis:",
            edu_business_title: "Basic Studies Business Administration",
            edu_fh_pforzheim: "Pforzheim University",
            international_title: "International",
            int_oslo: "Semester abroad at Universitetet i Oslo, Norway (6 months, 2022)",
            int_korea: "Stay in South Korea (6 weeks, 2024)",
            int_travel: "Travels to Namibia, Iceland, Brazil",
            languages_title: "Languages",
            lang_german: "German (Native)",
            lang_english: "English (C1)",
            skills_title: "Skills",
            skills_prog_data: "Programming & Data",
            skills_web_design: "Web & Design",
            skills_tools: "Tools",
            experience_title: "Experience",
            exp_ai_center_title: "Student Assistant in Product Development",
            exp_ai_center_1: "Conducting requirements analysis",
            exp_ai_center_2: "Developing the product from ideation to launch",
            exp_itdesign_student_title: "Working Student in Data Analysis/Data Science",
            exp_itdesign_student_1: "Analyzing usage data to identify patterns and trends using Machine Learning",
            exp_itdesign_student_2: "Developing dashboards and reports",
            exp_itdesign_intern_title: "Intern in Data Analysis/Data Science",
            exp_tutor_title: "Tutor for Mathematics",
            exp_uni_tuebingen_math: "University of Tübingen",
            exp_tutor_1: "Preparation and conducting of weekly exercises",
            exp_tutor_2: "Correction and grading of homework and exams",
            projects_title: "Projects",
            proj_museum_title: "LLM as a Virtual Museum Guide",
            proj_museum_desc: "Development of a virtual museum guide based on Large Language Models.",
            proj_emotion_title: "Multilingual Emotion Recognition",
            proj_emotion_desc: "Project to recognize emotions in different languages using Machine Learning algorithms.",
            proj_sportapp_title: "UX/UI Design for Sports App",
            proj_sportapp_desc: "Conception of the User Interface and User Experience for a mobile sports application.",
            interests_engagement_title: "Interests & Engagement",
            interests_title: "Interests",
            int_dance: "Dance and Theater",
            int_guitar: "Playing Guitar",
            int_travel_int: "Travel",
            int_video: "Video Editing",
            int_games: "Board Games",
            engagement_title: "Engagement",
            role_mentor: "Mentor",
            eng_cybermentor: "at CyberMentor (since 10/2025)",
            role_course_instructor: "Course Instructor",
            eng_it4kids: "at It4kids (2024)",
            role_buddy: "Buddy",
            eng_buddy: "for international students (2022-2024)",
            role_youth_leader: "Youth Group Leader",
            eng_cvjm: "CVJM (2015-2018)",
            footer_title: "Let's work together",
            footer_text: "I am looking forward to new challenges and exciting projects.",
            footer_location: "Tübingen, Germany",
            footer_rights: "All rights reserved."
        }
    };

    // Language Logic
    const langToggle = document.getElementById('lang-toggle');
    let currentLang = 'de';

    try {
        currentLang = localStorage.getItem('language') || 'de';
    } catch (e) {
        console.warn('LocalStorage not available:', e);
    }

    // Typewriter Effect - variables must be declared before setLanguage uses them
    const textElement = document.getElementById('typewriter');
    const typewriterWords = {
        de: ['Data Scientist', 'Human-AI Researcher', 'Developer'],
        en: ['Data Scientist', 'Human-AI Researcher', 'Developer']
    };
    let currentTypewriterTimeout;

    function setLanguage(lang) {
        console.log('Setting language to:', lang); // Debug log
        currentLang = lang;

        try {
            localStorage.setItem('language', lang);
        } catch (e) {
            console.warn('Unable to save language to LocalStorage:', e);
        }

        if (langToggle) {
            langToggle.textContent = lang === 'de' ? 'EN' : 'DE';
        }
        document.documentElement.lang = lang;

        const elements = document.querySelectorAll('[data-i18n]');
        console.log(`Found ${elements.length} elements to translate.`); // Debug log

        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            } else {
                console.warn(`Missing translation for key: ${key} in language: ${lang}`);
            }
        });

        updateTypewriter();
    }

    // Initialize Language
    setLanguage(currentLang);

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            console.log('Language toggle clicked'); // Debug log
            const newLang = currentLang === 'de' ? 'en' : 'de';
            console.log('Switching from', currentLang, 'to', newLang);
            setLanguage(newLang);
        });
    } else {
        console.error('Language toggle button not found!');
    }


    function updateTypewriter() {
        // Reset typewriter
        if (currentTypewriterTimeout) clearTimeout(currentTypewriterTimeout);

        const texts = typewriterWords[currentLang];
        let count = 0;
        let index = 0;
        let currentText = '';
        let letter = '';

        function type() {
            if (count === texts.length) {
                count = 0;
            }
            currentText = texts[count];
            letter = currentText.slice(0, ++index);

            textElement.textContent = letter;
            if (letter.length === currentText.length) {
                currentTypewriterTimeout = setTimeout(() => {
                    deleteText();
                }, 2000);
            } else {
                currentTypewriterTimeout = setTimeout(type, 100);
            }
        }

        function deleteText() {
            currentText = texts[count];
            letter = currentText.slice(0, --index);
            textElement.textContent = letter;
            if (letter.length === 0) {
                count++;
                index = 0;
                currentTypewriterTimeout = setTimeout(type, 500);
            } else {
                currentTypewriterTimeout = setTimeout(deleteText, 50);
            }
        }

        type();
    }

    // Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.section-title, .about-card, .skill-category, .timeline-item, .project-card, .interest-col, .contact-card');
    elementsToAnimate.forEach(el => {
        el.classList.add('hidden');
        observer.observe(el);
    });

    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        // Animate hamburger
        const spans = hamburger.querySelectorAll('span');
        spans.forEach(span => span.classList.toggle('active'));
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});
