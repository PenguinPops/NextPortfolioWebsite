"use client";

import { t } from "@/lib/i18n";
import { useLanguage } from "@/hooks/use-language"

export default function AboutSection() {
  const { language } = useLanguage();

  return (
    <section id="about" className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold text-white mb-6">{t(language, "aboutTitle")}</h2>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                {t(language, "aboutDescription1")}
                {t(language, "aboutDescription2")}
              </p>
              <p>
                {t(language, "aboutDescription3")}
              </p>
              <p>
                {t(language, "aboutDescription4")}
                {t(language, "aboutDescription5")}
                {t(language, "aboutDescription6")}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-purple-300">20+</div>
                <div className="text-sm text-gray-300">{t(language, "projectsCompleted")}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-purple-300">8+</div>
                <div className="text-sm text-gray-300">{t(language, "yearsExperience")}</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl">
                <img src="/old/pic.png?height=320&width=320" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-gray-500/20 to-gray-500/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
