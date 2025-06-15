import type { Language, Translations } from "@/types/i18n"

const translations: Record<Language, Translations> = {
  en: {
    // Header
    headerTitle: "Portfolio",
    subheader: "Michal Soltys",
    projects: "Projects",
    skills: "Skills",
    about: "About",
    contact: "Contact",

    // Projects Section
    featuredProjects: "Featured Projects",
    projectsDescription: "My most recent and best projects showcasing my current level of expertise",
    viewDetails: "View Details →",
    comingSoon: "Coming Soon",
    workInProgress: "Work in Progress",
    wipDescription: "This project is under active development and will be available soon.",
    otherProjects: "Other Projects",
    otherProjectsDescription:
      "A collection of projects that cover various technologies and tools I work with",

    // Skills Section
    skillsTitle: "Skills & Expertise",
    skillsDescription: "Technologies and tools I work with to bring ideas to life",
    proficiency: "Proficiency",
    title1: "AI Workflow and Automation",
    description1: "ChatGPT, DeepSeek, Claude, Gemini, DeepSeek API, Web Scraping, Googling, Stack Overflow",
    title2: "Frontend Development",
    description2: "React, Next.js, TypeScript, Tailwind CSS, ChartJS",
    title3: "Backend Development",
    description3: "Node.js, Express.js, RESTful APIs, MongoDB, PostgreSQL",
    title4: "Database Management",
    description4: "SQL, NoSQL, Database Design, Query Optimization",
    title5: "DevOps & Cloud",
    description5: "Docker, Kubernetes, Vercel",
    title6: "AI and Machine Learning",
    description6: "YOLOv8, Vision detection design, Data Analysis, Model Training",
    title7: "UI/UX Design & Presentation",
    description7: "Figma, Visily, Photoshop, Davinci Resolve, Responsive Design, User Research",
    title8: "Mobile Development",
    description8: "Android Native (Java), iOS Native (Swift)",

    // About Section
    aboutTitle: "About Me",
    aboutDescription1:
      "I'm a passionate full-stack developer with over 8 years of personal coding experience creating digital solutions.",
    aboutDescription2:
      " I am working on several software development projects, as well as exploring the world of AI through its usage in my programming workflow.",
    aboutDescription3:
      "Alongside those, I edit videos professionally, edit and color-grade photos. I also do UI/UX experiences for the Web.",
    aboutDescription4:
      "I'm a hard-working person, relentless when it comes to deadlines, always set on achieving the desired goal.",
    aboutDescription5:
      " I consider myself a team player, owing it to my sharp social skills.",
    aboutDescription6: 
      " I can also boast of my English as a native speaker in that language.",
    projectsCompleted: "Personal / Commission Projects Completed",
    yearsExperience: "Years of Coding Experience",

    // Contact Section
    contactTitle: "Get In Touch",
    contactDescription:
      "Ready to work together? I'd love to hear from you! Leave a message below and I'll get back to you as soon as possible.",
    letsConnect: "Let's Connect",
    sendMessage: "Send a Message",
    yourName: "Your Name",
    yourEmail: "Your Email",
    subject: "Subject",
    yourMessage: "Your Message",
    phone: "Phone",
    email: "Email",

    // Project Page
    backToProjects: "Back to Projects",
    viewLivesite: "View Live Site",
    viewCode: "View Code",
    date: "Date",
    client: "Client",
    category: "Category",
    projectGallery: "Project Gallery",
    technologiesUsed: "Technologies Used",
    projectOverview: "Project Overview",
    interestedInSimilarWork: "Interested in Similar Work?",
    interestedDescription: "I'd love to discuss your project and how we can work together to bring your ideas to life.",
    getInTouch: "Get In Touch",
  },
  pl: {
    // Header
    headerTitle: "Portfolio",
    subheader: "Michał Sołtys",
    projects: "Projekty",
    skills: "Umiejętności",
    about: "O mnie",
    contact: "Kontakt",

    // Projects Section
    featuredProjects: "Wybrane Projekty",
    projectsDescription:
      "Moje najnowsze i najlepsze projekty, które pokazują mój aktualny poziom umiejętności",
    viewDetails: "Zobacz szczegóły →",
    comingSoon: "Wkrótce",
    workInProgress: "W trakcie realizacji",
    wipDescription: "Ten projekt jest w trakcie rozwoju i będzie dostępny wkrótce.",
    otherProjects: "Inne Projekty",
    otherProjectsDescription:
    "Kolekcja projektów, dotyczących różnych technologii i narzędzi",

    // Skills Section
    skillsTitle: "Umiejętności i Ekspertyza",
    skillsDescription: "Technologie i narzędzia, z których korzystam, aby wcielać pomysły w życie",
    proficiency: "Biegłość",
    title1: "AI Workflow i Automatyzacja",
    description1: "ChatGPT, Claude, Gemini, DeepSeek API, Web Scraping, Google, Stack Overflow",
    title2: "Frontend Development",
    description2: "React, Next.js, TypeScript, Tailwind CSS, ChartJS",
    title3: "Backend Development",
    description3: "Node.js, Express.js, RESTful APIs, MongoDB, PostgreSQL",
    title4: "Zarządzanie Bazą Danych",
    description4: "SQL, NoSQL, Projektowanie Bazy Danych, Optymalizacja Zapytania",
    title5: "DevOps i Chmura",
    description5: "Docker, Kubernetes, Vercel",
    title6: "AI i Uczenie Maszynowe",
    description6: "YOLOv8, Projektowanie detekcji wizji, Analiza danych, Trening modeli", 
    title7: "UI/UX Design i Prezentacja",
    description7: "Figma, Visily, Photoshop, Davinci Resolve, Responsive Design, Badania Użytkowników",
    title8: "Aplikacje Mobilne",
    description8: "Android Native (Java), iOS Native (Swift)",

    // About Section
    aboutTitle: "O mnie",
    aboutDescription1:
      "Jestem pasjonatem programowania z ponad 8-letnim doświadczeniem w tworzeniu różnych programów i projektów.",
    aboutDescription2:
      " Pracuję nad kilkoma projektami programistycznymi, a także korzystam z AI w moim codziennym workflow.",
    aboutDescription3:
      "Oprócz tego profesjonalnie edytuję filmy, edytuję i retuszuję zdjęcia. Zajmuję się również doświadczeniami UI/UX dla sieci.",
    aboutDescription4:
      "Jestem pracowity, nieustępliwy jeśli chodzi o terminy, zawsze dążący do osiągnięcia zamierzonego celu.",
    aboutDescription5:
      " Uważam się za gracza zespołowego, co zawdzięczam moim umiejętnościom społecznym.",
    aboutDescription6:
      " Mogę również pochwalić się moim angielskim jako native speaker w tym języku.",
    projectsCompleted: "Ukończone Projekty Osobiste / Zlecenia",
    yearsExperience: "Lat Doświadczenia w Kodowaniu",

    // Contact Section
    contactTitle: "Skontaktuj się",
    contactDescription:
      "Mogę służyć pomocą? Coś Cię zainteresowało? Zostaw wiadomość poniżej, a jak najszybciej się z Tobą skontaktuję.",
    letsConnect: "Nawiążmy kontakt",
    sendMessage: "Wyślij wiadomość",
    yourName: "Twoje imię",
    yourEmail: "Twój email",
    subject: "Temat",
    yourMessage: "Twoja wiadomość",
    phone: "Telefon",
    email: "Email",

    // Project Page
    backToProjects: "Powrót do projektów",
    viewLivesite: "Zobacz stronę",
    viewCode: "Zobacz kod",
    date: "Data",
    client: "Klient",
    category: "Kategoria",
    projectGallery: "Galeria projektu",
    technologiesUsed: "Użyte technologie",
    projectOverview: "Przegląd projektu",
    interestedInSimilarWork: "Zainteresowany podobną pracą?",
    interestedDescription:
      "Chciałbym omówić Twój projekt i to, jak możemy współpracować, aby wcielić Twoje pomysły w życie.",
    getInTouch: "Skontaktuj się",
  },
}

export function t(lang: Language, key: keyof Translations): string {
  return translations[lang][key]
}

export { translations }
