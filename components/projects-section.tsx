"use client"

import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { t } from "@/lib/i18n"

const projects = [
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with payment integration",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description: "Beautiful weather app with location-based forecasts",
    technologies: ["Vue.js", "OpenWeather API", "Chart.js"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "Responsive portfolio with modern design and animations",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "chat-application",
    title: "Real-time Chat App",
    description: "Instant messaging with file sharing capabilities",
    technologies: ["React", "Firebase", "WebRTC"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker",
    description: "Track workouts and monitor progress with analytics",
    technologies: ["React Native", "Express.js", "MySQL"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "blog-platform",
    title: "Blog Platform",
    description: "Content management system with markdown support",
    technologies: ["Gatsby", "GraphQL", "Contentful"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "inventory-system",
    title: "Inventory Management",
    description: "Business inventory tracking with reporting features",
    technologies: ["Angular", "Spring Boot", "PostgreSQL"],
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function ProjectsSection() {
  const { language } = useLanguage()

  return (
    <section id="projects" className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">{t(language, "featuredProjects")}</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t(language, "projectsDescription")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/project/${project.id}`}
              className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 2 && (
                    <span className="px-2 py-1 text-xs bg-gray-500/20 text-gray-300 rounded-full border border-gray-500/30">
                      +{project.technologies.length - 2}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-300 group-hover:text-purple-200">
                    {t(language, "viewDetails")}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
