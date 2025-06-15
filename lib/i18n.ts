import type { Language, Translations } from "@/types/i18n"

const translations: Record<Language, Translations> = {
  en: {
    // Header
    headerTitle: "Portfolio",
    projects: "Projects",
    skills: "Skills",
    about: "About",
    contact: "Contact",

    // Projects Section
    featuredProjects: "Featured Projects",
    projectsDescription: "A collection of projects that showcase my skills and experience in web development",
    viewDetails: "View Details →",

    // Skills Section
    skillsTitle: "Skills & Expertise",
    skillsDescription: "Technologies and tools I work with to bring ideas to life",
    proficiency: "Proficiency",

    // About Section
    aboutTitle: "About Me",
    aboutDescription1:
      "I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that make a difference. I specialize in modern web technologies and love turning complex problems into simple, beautiful designs.",
    aboutDescription2:
      "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in writing clean, maintainable code and creating user experiences that delight.",
    aboutDescription3:
      "I'm always excited to work on challenging projects and collaborate with teams that share my passion for innovation and excellence.",
    projectsCompleted: "Projects Completed",
    yearsExperience: "Years Experience",

    // Contact Section
    contactTitle: "Get In Touch",
    contactDescription:
      "Ready to work together? I'd love to hear about your project and discuss how we can bring your ideas to life.",
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
    projects: "Projekty",
    skills: "Umiejętności",
    about: "O mnie",
    contact: "Kontakt",

    // Projects Section
    featuredProjects: "Wybrane Projekty",
    projectsDescription:
      "Kolekcja projektów, które pokazują moje umiejętności i doświadczenie w tworzeniu stron internetowych",
    viewDetails: "Zobacz szczegóły →",

    // Skills Section
    skillsTitle: "Umiejętności i Ekspertyza",
    skillsDescription: "Technologie i narzędzia, z których korzystam, aby wcielać pomysły w życie",
    proficiency: "Biegłość",

    // About Section
    aboutTitle: "O mnie",
    aboutDescription1:
      "Jestem pasjonatem full-stack developmentu z ponad 5-letnim doświadczeniem w tworzeniu rozwiązań cyfrowych, które mają znaczenie. Specjalizuję się w nowoczesnych technologiach webowych i uwielbiam przekształcać złożone problemy w proste, piękne projekty.",
    aboutDescription2:
      "Kiedy nie koduję, można mnie znaleźć eksplorującego nowe technologie, przyczyniającego się do projektów open-source lub dzielącego się wiedzą ze społecznością deweloperów. Wierzę w pisanie czystego, łatwego w utrzymaniu kodu i tworzenie doświadczeń użytkownika, które zachwycają.",
    aboutDescription3:
      "Zawsze jestem podekscytowany pracą nad wymagającymi projektami i współpracą z zespołami, które podzielają moją pasję do innowacji i doskonałości.",
    projectsCompleted: "Ukończone Projekty",
    yearsExperience: "Lat Doświadczenia",

    // Contact Section
    contactTitle: "Skontaktuj się",
    contactDescription:
      "Gotowy do współpracy? Chciałbym usłyszeć o Twoim projekcie i omówić, jak możemy wcielić Twoje pomysły w życie.",
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
