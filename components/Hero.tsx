"use client";

import HeroBackground from "./HeroBackground";
import { useLanguage } from "../app/context/LanguageContext";

export default function Hero() {
  const { language } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.55)), url('/images/hero-bg.jpg')",
      }}
    >
      {/* Animated Background */}
      <HeroBackground />

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-40 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <p className="text-yellow-400 uppercase tracking-[5px] font-semibold">
              {language === "ta"
                ? "25+ ஆண்டுகள் அனுபவம்"
                : "25+ Years of Experience"}
            </p>

            <h1 className="gold-text text-5xl md:text-7xl font-extrabold leading-tight mt-5">
              {language === "ta"
                ? "ஸ்ரீ கௌசிக மகாசிவ வசிஷ்டர்"
                : "Sri Kousika Mahasiva Vasishtar"}
            </h1>

            <h2 className="text-3xl text-yellow-300 mt-5">
              {language === "ta"
                ? "நாடி ஜோதிட நிலையம்"
                : "Nadi Astrology Centre"}
            </h2>

            <p className="text-gray-200 text-lg leading-9 mt-8 max-w-xl">
              {language === "ta"
                ? "பாரம்பரிய நாடி ஜோதிடத்தின் மூலம் உங்கள் வாழ்க்கைக்கு துல்லியமான வழிகாட்டுதலை வழங்குகிறோம். திருமண பொருத்தம், தொழில், கல்வி, உடல்நலம், குடும்பம், வியாபாரம் மற்றும் ஆன்மீக ஆலோசனைகள் தமிழிலும் ஆங்கிலத்திலும் வழங்கப்படுகின்றன."
                : "Discover your life's path through authentic Nadi Astrology. We provide accurate horoscope reading, marriage matching, career guidance, education, health, business consultation and spiritual remedies in Tamil and English."}
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="tel:+919952724996"
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300"
              >
                📞 {language === "ta" ? "இப்போது அழைக்கவும்" : "Call Now"}
              </a>

              <a
                href="https://wa.me/919952724996"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-yellow-500 text-yellow-400 px-8 py-4 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300"
              >
                💬 WhatsApp
              </a>

            </div>

            <div className="grid grid-cols-3 gap-6 mt-14">

              <div className="glass rounded-2xl p-5 text-center">
                <h3 className="text-yellow-400 text-3xl font-bold">25+</h3>
                <p className="text-gray-300 text-sm mt-2">
                  {language === "ta" ? "ஆண்டுகள்" : "Years"}
                </p>
              </div>

              <div className="glass rounded-2xl p-5 text-center">
                <h3 className="text-yellow-400 text-3xl font-bold">5000+</h3>
                <p className="text-gray-300 text-sm mt-2">
                  {language === "ta" ? "வாடிக்கையாளர்கள்" : "Clients"}
                </p>
              </div>

              <div className="glass rounded-2xl p-5 text-center">
                <h3 className="text-yellow-400 text-3xl font-bold">100%</h3>
                <p className="text-gray-300 text-sm mt-2">
                  {language === "ta" ? "வழிகாட்டுதல்" : "Guidance"}
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex justify-center">

            <img
              src="/images/astrologer.png"
              alt="Sri Kousika Mahasiva Vasishtar"
              className="w-[420px] lg:w-[520px] drop-shadow-[0_0_50px_rgba(255,215,0,0.5)] hover:scale-105 transition-all duration-500"
            />

          </div>

        </div>
      </div>
    </section>
  );
}