"use client";

import { useLanguage } from "@/hooks/use-language";
import { t } from "@/lib/i18n";
import { useState } from "react";
import { useEffect } from "react";

export default function WarningSection() {
  const { language } = useLanguage();

const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return true;
    return document.cookie.includes("warningSectionHidden=true") ? false : true;
});

useEffect(() => {
    if (!visible) {
        document.cookie = "warningSectionHidden=true; path=/; max-age=31536000";
    }
}, [visible]);

if (!visible) return null;

return (
    <section className="bg-yellow-200 text-yellow-900 rounded-md mx-auto max-w-2xl px-6 mt-16 py-4 mb-8 shadow-lg border border-yellow-300 text-center relative">
        <button
            onClick={() => setVisible(false)}
            className="absolute top-2 right-2 text-yellow-900 hover:text-yellow-700 text-xl font-bold focus:outline-none"
            aria-label="Dismiss"
            type="button"
        >
            ×
        </button>
        <span role="img" aria-label="Warning" className="mr-2">⚠️</span>
        <strong>{t(language, "warning")}</strong>
        {t(language, "warningMessage")}
    </section>
);
}