"use client"

import { useEffect, useState } from "react"
import { t } from "@/lib/i18n"
import { useLanguage } from "@/hooks/use-language"



export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)

  const { language } = useLanguage()

  const skills = [
  {
    title: t(language, "title1"),
    description: t(language, "description1"),
    level: 95,
  },
  {
    title: t(language, "title2"),
    description: t(language, "description2"),
    level: 90,
  },
  {
    title: t(language, "title3"),
    description: t(language, "description3"),
    level: 85,
  },
  {
    title: t(language, "title4"),
    description: t(language, "description4"),
    level: 85,
  },
  {
    title: t(language, "title5"),
    description: t(language, "description5"),
    level: 80,
  },
  {
    title: t(language, "title6"),
    description: t(language, "description6"),
    level: 70,
  },
  {
    title: t(language, "title7"),
    description: t(language, "description7"),
    level: 70,
  },
  {
    title: t(language, "title8"),
    description: t(language, "description8"),
    level: 50,
  },

]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("skills")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-24 px-6 lg:px-8 bg-black/20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={skill.title} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
                <p className="text-gray-300 text-sm">{skill.description}</p>
              </div>

              <div className="mb-2">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-300">Proficiency</span>
                  <span className="text-sm text-purple-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700/50 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${index * 200}ms`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
