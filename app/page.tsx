import Header from "@/components/header"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import WarningSection from "@/components/warning-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <main className="pt-16">
    <WarningSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <footer className="bg-black/20 backdrop-blur-md border-t border-white/10 py-6">
        <div className="mx-auto max-w-7xl text-center text-gray-400">
          &copy; {new Date().getFullYear()} Michal Soltys. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
