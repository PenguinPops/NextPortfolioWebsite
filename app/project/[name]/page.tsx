"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Calendar, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { t } from "@/lib/i18n"
import { useLanguage } from "@/hooks/use-language"
import { useParams } from "next/navigation"
import { projects as enProjects } from "@/components/data/projects-en"
import { projects as plProjects } from "@/components/data/projects-pl"


export default function ProjectPage() {
  const params = useParams()
  const { language } = useLanguage()
  
  const name = params?.name as string
  const projects = language === "pl" ? plProjects : enProjects
  const project = projects[name as keyof typeof projects]
  
  if (!project) {
    notFound()
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <Link
            href="/#projects"
            className="inline-flex items-center space-x-2 text-purple-300 hover:text-purple-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t(language, "backToProjects")}</span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12">
        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{project.title}</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">{project.description}</p>

          <div className="flex flex-wrap gap-4 mb-8">
            {project.liveUrl && (
              <Button
                asChild
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {t(language, "viewLivesite")}
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" asChild className="border-white/20 text-white bg-purple-600 hover:bg-white/10">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  {t(language, "viewCode")}
                </a>
              </Button>
            )}
          </div>

          {/* Project Meta */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-white">
                  {t(language, "date")}
                </span>
              </div>
              <span className="text-gray-300">{project.date}</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <div className="flex items-center space-x-2 mb-2">
                <User className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-white">
                  {t(language, "client")}
                </span>
              </div>
              <span className="text-gray-300">{project.client}</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <div className="flex items-center space-x-2 mb-2">
                <Tag className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-white">
                  {t(language, "category")}
                </span>
              </div>
              <span className="text-gray-300">{project.category}</span>
            </div>
          </div>
        </div>

        {/* Project Images */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            {t(language, "projectGallery")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-xl border border-white/20">
                {/* Use Next.js Image component for better performance */}
                <img
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300"
                  loading="lazy" // Add lazy loading
                />
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            {t(language, "technologiesUsed")}
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Description */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">{t(language, "projectOverview")}</h2>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              {project.longDescription.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-gray-300 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-4">{t(language, "interestedInSimilarWork")}</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            {t(language, "interestedDescription")}
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            <Link href="/#contact">{t(language, "getInTouch")}</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
