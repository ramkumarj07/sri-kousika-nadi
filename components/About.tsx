"use client";

import { useLanguage } from "../app/context/LanguageContext";

export default function About() {
  const { language } = useLanguage();

  return (
    <section
      id="about"
      className="py-24 bg-[#0B0613]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div>

            <p className="text-yellow-400 uppercase tracking-[4px] font-semibold">
              {language === "ta" ? "எங்களை பற்றி" : "ABOUT US"}
            </p>

            <h2 className="gold-text text-5xl font-bold mt-5">
              {language === "ta"
                ? "ஸ்ரீ கௌசிக மகாசிவ வசிஷ்டர்"
                : "Sri Kousika Mahasiva Vasishtar"}
            </h2>

            <h3 className="text-yellow-300 text-2xl mt-4">
              {language === "ta"
                ? "நாடி ஜோதிட நிலையம்"
                : "Nadi Astrology Centre"}
            </h3>

            <p className="text-gray-300 mt-8 leading-9 text-lg">
              {language === "ta"
                ? "25 ஆண்டுகளுக்கும் மேலான அனுபவத்துடன், உண்மையான நாடி ஜோதிட முறையின் மூலம் ஆயிரக்கணக்கான மக்களுக்கு துல்லியமான வழிகாட்டுதலை வழங்கி வருகிறோம்."
                : "With more than 25 years of experience, we have been providing authentic Nadi Astrology guidance to thousands of people with accurate predictions and spiritual consultation."}
            </p>

            <p className="text-gray-400 mt-6 leading-8">
              {language === "ta"
                ? "திருமணம், தொழில், கல்வி, உடல்நலம், குடும்பம், வெளிநாட்டு யோகம், வியாபாரம் மற்றும் ஆன்மீக பரிகாரங்களுக்கு ஆலோசனை வழங்கப்படுகிறது."
                : "We provide consultation for marriage, career, education, health, family, foreign opportunities, business growth and spiritual remedies."}
            </p>

            <div className="grid grid-cols-2 gap-6 mt-12">

              <div className="glass rounded-2xl p-6 text-center">

                <h3 className="text-yellow-400 text-4xl font-bold">
                  25+
                </h3>

                <p className="text-gray-300 mt-2">
                  {language === "ta"
                    ? "ஆண்டுகள் அனுபவம்"
                    : "Years Experience"}
                </p>

              </div>

              <div className="glass rounded-2xl p-6 text-center">

                <h3 className="text-yellow-400 text-4xl font-bold">
                  5000+
                </h3>

                <p className="text-gray-300 mt-2">
                  {language === "ta"
                    ? "வாடிக்கையாளர்கள்"
                    : "Happy Clients"}
                </p>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <img
              src="/images/astrologer.png"
              alt="Astrologer"
              className="w-[450px] rounded-[35px] border-4 border-yellow-500 shadow-[0_0_60px_rgba(255,196,0,.35)]"
            />

          </div>

        </div>

      </div>
    </section>
  );
}