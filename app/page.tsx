import Header from "@/components/header"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <main>
        <div className="h-16 min-w-screen"></div>
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  )
}
