"use client";

import { useLanguage } from "../app/context/LanguageContext";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const { language } = useLanguage();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#090510]/80 backdrop-blur-xl border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div>
          <h1 className="gold-text text-xl md:text-2xl font-bold">
            {language === "ta"
              ? "ஸ்ரீ கௌசிக மகாசிவ வசிஷ்டர்"
              : "Sri Kousika Mahasiva Vasishtar"}
          </h1>

          <p className="text-gray-300 text-sm">
            {language === "ta"
              ? "நாடி ஜோதிட நிலையம்"
              : "Nadi Astrology Centre"}
          </p>
        </div>

        {/* Menu */}
        <nav className="hidden lg:flex items-center gap-8">

          <a
            href="#home"
            className="text-white hover:text-yellow-400 transition"
          >
            {language === "ta" ? "முகப்பு" : "Home"}
          </a>

          <a
            href="#about"
            className="text-white hover:text-yellow-400 transition"
          >
            {language === "ta" ? "எங்களை பற்றி" : "About"}
          </a>

          <a
            href="#services"
            className="text-white hover:text-yellow-400 transition"
          >
            {language === "ta" ? "சேவைகள்" : "Services"}
          </a>

          <a
            href="#contact"
            className="text-white hover:text-yellow-400 transition"
          >
            {language === "ta" ? "தொடர்பு" : "Contact"}
          </a>

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <LanguageToggle />

          <a
            href="https://wa.me/919952724996"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-5 py-3 rounded-full transition"
          >
            {language === "ta" ? "வாட்ஸ்அப்" : "WhatsApp"}
          </a>

        </div>

      </div>
    </header>
  );
}