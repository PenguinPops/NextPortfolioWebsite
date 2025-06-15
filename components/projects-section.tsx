"use client"

import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { t } from "@/lib/i18n"

const projects = [
  {
    id: "box-counter-app",
    title: "Box Counter App",
    description: "A complex web application for managing warehouse box inventory",
    technologies: ["Next.js", "TypeScript", "NeonDB", "ChartJS", "Tailwind CSS", "PostgreSQL", "Auth.js" ],
    year: "2024",
    type: "Commission",
    image: "/placeholder.svg",
    link: "",
    featured: true,
    inProgress: false
  },
  {
    id: "blossom-boutique",
    title: "Blossom Boutique",
    description: "A modern e-commerce platform for floral products",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "NeonDB"],
    year: "2024",
    type: "Private",
    image: "/placeholder.svg",
    link: "",
    featured: true
  },
  {
    id: "socioeconomic-statistic-analysis",
    title: "Socioeconomic Statistic Analysis App",
    description: "A web application for analyzing socioeconomic statistics",
    technologies: ["RESTful API", "Next.js", "Auth.js", "PostgreSQL", "MongoDB", "Tailwind CSS", "Docker", "Docker Compose"],
    year: "2024",
    type: "Private",
    image: "/placeholder.svg",
    link: "",
    featured: true,
  },
  // Regular projects
  {
    id: "vision-ai",
    title: "Vision AI research",
    description: "A research project on YOLOv8 and to recognize objects in images",
    technologies: ["Python", "YOLOv8", "Pandas", "NumPy"],
    year: "2024",
    type: "Private",
    image: "placeholder.svg",
    link: "",
  },
  {
    id: "simple-landing-page",
    title: "Simple Landing Page",
    description: "A simple landing page for the elderly",
    technologies: ["HTML", "CSS", "JavaScript"],
    year: "2023",
    type: "Commission",
    image: "/placeholder.svg",
    link: "",
  },
  {
    id: "old-portfolio-website",
    title: "Previous Portfolio Website",
    description: "Design and coding",
    technologies: ["HTML", "CSS", "JavaScript"],
    year: "2023",
    type: "Private",
    image: "/placeholder.svg",
    link: "https://penguinpops.github.io/PortfolioWebsite/"
  },
  {
    id: "format-cpp",
    title: "Format C++",
    description: "Personal use electron app for the desktop",
    technologies: ["C++", "Electron"],
    year: "2023",
    type: "Private",
    image: "/old/formatcbackground.jpg",
    link: "https://github.com/PenguinPops/Format-C-UI-app"
  },
  {
    id: "pong-game",
    title: "Pong 3D",
    description: "A simple game with a 3D graphic twist",
    technologies: ["C#", "Unity"],
    year: "2023",
    type: "Private",
    image: "/old/pongback.jpg",
    link: "https://play.unity.com/mg/other/pong-3d-w"
  },
  {
    id: "perigord-media",
    title: "Perigord Media",
    description: "Professional video editing of short-form content",
    technologies: ["DaVinci Resolve"],
    year: "2023",
    type: "Commission",
    image: "placeholder.svg",
    link: "https://drive.google.com/drive/folders/1X9wXs7brJHFsO-k1zsy6P_AX0tW9cD00?usp=sharing"
  },
  {
    id: "radymentia",
    title: "Radymentia",
    description: "Cover lettering artwork and advertisement production",
    technologies: ["Photoshop", "Advertising"],
    year: "2022",
    type: "Commission",
    image: "/old/okladka001.jpg",
    link: "https://www.olx.pl/d/oferta/powiesc-fantasy-radymentia-krysztal-mocy-CID751-IDR8FY6.html"
  },
  {
    id: "angular-spa",
    title: "AngularJS SPA",
    description: "Uni project on the basics of Web3",
    technologies: ["HTML", "CSS", "Angular"],
    year: "2024",
    type: "Private",
    image: "",
    link: "https://github.com/PenguinPops/lab1"
  }
];


export default function ProjectsSection() {
  const { language } = useLanguage()

  const featuredProjects = projects.filter(project => project.featured)
  const regularProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">{t(language, "featuredProjects")}</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t(language, "projectsDescription")}</p>
        </div>

        {/* Featured Projects - Horizontal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <div 
              key={project.id}
              className={`relative group ${project.inProgress ? 'cursor-not-allowed' : ''}`}
            >
              <Link
                href={project.inProgress ? '#' : `/project/${project.id}`}
                className="relative block overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/20 transition-all duration-300 h-96 pt-20 hover:scale-[1.02]"
              >
                {/* Project image as full background */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-300 ${
                      project.inProgress ? 'blur-sm brightness-50' : 'group-hover:scale-110'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Commision badge */}
                {project.type !== "Private" && (
                  <div className="absolute top-16 mt-1 -left-5 z-10">
                    <div className="bg-purple-500/90 text-white text-xs font-medium px-9 py-1 transform -rotate-45 origin-left shadow-md shadow-gray-700/50">
                      Commission
                    </div>
                  </div>
                )}


                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-2">{project.year}</p>
                    <p className="text-gray-100 text-base mb-4">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs bg-gray-500/20 text-gray-300 rounded-full border border-gray-500/30">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                  {!project.inProgress && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-purple-300 group-hover:text-purple-200">
                        {t(language, "viewDetails")}
                      </span>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Regular Projects Title */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">{t(language, "otherProjects")}</h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{t(language, "otherProjectsDescription")}</p>
        </div>

        

        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regularProjects.map((project) => (
            <div 
              key={project.id}
              className="relative group"
            >

              <Link
                href={project.inProgress ? '#' : `/project/${project.id}`}
                className="relative pt-20 block overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/20 transition-all duration-300 hover:scale-105"
              >

                
              {/* WIP overlay */}
                {project.inProgress && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/70 backdrop-blur-sm">
                    <div className="text-center p-4">
                      <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/50 mb-3">
                        <span className="relative flex h-3 w-3 mr-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                        </span>
                        <span className="text-purple-300 text-sm font-medium">
                          {t(language, "workInProgress")}
                        </span>
                      </div>
                      <h3 className="text-white font-semibold text-lg">
                        {t(language, "comingSoon")}
                      </h3>
                    </div>
                  </div>
                )}
                {/* Project image as full background */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>
                

                {/* Commercial badge */}
                {project.type !== "Private" && (
                  <div className="absolute top-14 mt-2 -left-5 z-10">
                    <div className="bg-purple-500/90 text-white text-[10px] font-medium px-9 py-0.5 transform -rotate-45 origin-left shadow-md shadow-gray-700/50">
                      Commission
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="relative z-15 h-60 flex flex-col justify-end p-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-0.5 group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-xs mb-2">{project.year}</p>
                    <p className="text-gray-100 text-sm mb-3 line-clamp-2">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 py-0.5 text-[10px] bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="px-1.5 py-0.5 text-[10px] bg-gray-500/20 text-gray-300 rounded-full border border-gray-500/30">
                        +{project.technologies.length - 2}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-purple-300 group-hover:text-purple-200">
                      {t(language, "viewDetails")}
                    </span>
                    <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}