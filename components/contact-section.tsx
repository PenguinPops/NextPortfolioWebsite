"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, Github, Linkedin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { t } from "@/lib/i18n"
import { useLanguage } from "@/hooks/use-language"



export default function ContactSection() {
  const { language } = useLanguage()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const contactLinks = [
  {
    icon: Phone,
    label: t(language, "phone"),
    value: "(+48) 668 931 666",
    href: "tel:+48668931666",
  },
  {
    icon: Mail,
    label: t(language, "email"),
    value: "msoltys.biz@gmail.com",
    href: "mailto:msoltys.biz@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/PenguinPops",
    href: "https://github.com/PenguinPops",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/michał-sołtys-2b7525239",
    href: "https://www.linkedin.com/in/micha%C5%82-so%C5%82tys-2b7525239/",
  },
]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-black/20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">{t(language, "contactTitle")}</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t(language, "contactDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Links */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              {t(language, "letsConnect")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0">
                    <link.icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors">
                      {link.label}
                    </div>
                    <div className="text-sm text-gray-300 truncate">{link.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-6">
              {t(language, "sendMessage")}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder={t(language, "yourName")}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder={t(language, "yourEmail")}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                  />
                </div>
              </div>

              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder={t(language, "subject")}
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder={t(language, "yourMessage")}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>{t(language, "sendMessage")}</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
