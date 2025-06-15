"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import LanguageToggle from "@/components/language-toggle"
import { useLanguage } from "@/hooks/use-language"
import { t } from "@/lib/i18n"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language } = useLanguage()

  const navigation = [
    { name: t(language, "projects"), href: "#projects" },
    { name: t(language, "skills"), href: "#skills" },
    { name: t(language, "about"), href: "#about" },
    { name: t(language, "contact"), href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-white">{t(language, "headerTitle")}</span>
          </a>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <LanguageToggle />
          <Button
            variant="ghost"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-x-8">
          <div className="flex gap-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-semibold leading-6 text-white hover:text-purple-300 transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
          <LanguageToggle />
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden min-h-screen"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="fixed inset-y-0 right-0 z-50 w-full bg-slate-900/95 backdrop-blur-md px-6 py-6 sm:max-w-sm border-l border-white/10 lg:hidden min-h-screen">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="text-2xl font-bold text-white">{t(language, "headerTitle")}</span>
              </a>
              <Button
                variant="ghost"
                className="-m-2.5 rounded-md p-2.5 text-white hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="-mx-3 block rounded-lg px-3 py-4 text-base font-semibold leading-7 text-white hover:bg-white/10 w-full text-left transition-colors"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
                <div className="py-6">
                  <LanguageToggle />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
