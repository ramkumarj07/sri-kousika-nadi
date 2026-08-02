"use client";

import { useLanguage } from "../app/context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-[#090510] border-t border-yellow-500/20">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {/* Company */}

          <div>

            <h2 className="gold-text text-3xl font-bold">
              {language === "ta"
                ? "ஸ்ரீ கௌசிக மகாசிவ வசிஷ்டர்"
                : "Sri Kousika Mahasiva Vasishtar"}
            </h2>

            <p className="text-gray-400 mt-2">
              {language === "ta"
                ? "நாடி ஜோதிட நிலையம்"
                : "Nadi Astrology Centre"}
            </p>

            <p className="text-gray-400 mt-6 leading-8">
              {language === "ta"
                ? "25 ஆண்டுகளுக்கும் மேலான அனுபவத்துடன் உண்மையான நாடி ஜோதிட ஆலோசனைகள் வழங்கப்படுகின்றன."
                : "Authentic Nadi Astrology consultation with over 25 years of experience helping thousands of people."}
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-yellow-400 text-xl font-bold mb-6">
              {language === "ta"
                ? "விரைவு இணைப்புகள்"
                : "Quick Links"}
            </h3>

            <ul className="space-y-4 text-gray-300">

              <li>
                <a href="#home" className="hover:text-yellow-400">
                  {language === "ta" ? "முகப்பு" : "Home"}
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-yellow-400">
                  {language === "ta" ? "எங்களை பற்றி" : "About"}
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-yellow-400">
                  {language === "ta" ? "சேவைகள்" : "Services"}
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-yellow-400">
                  {language === "ta" ? "தொடர்பு" : "Contact"}
                </a>
              </li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-yellow-400 text-xl font-bold mb-6">
              {language === "ta"
                ? "சேவைகள்"
                : "Services"}
            </h3>

            <ul className="space-y-4 text-gray-300">

              <li>
                {language === "ta"
                  ? "ஜாதகம் கணிப்பு"
                  : "Horoscope Reading"}
              </li>

              <li>
                {language === "ta"
                  ? "திருமண பொருத்தம்"
                  : "Marriage Matching"}
              </li>

              <li>
                {language === "ta"
                  ? "தொழில் ஆலோசனை"
                  : "Career Guidance"}
              </li>

              <li>
                {language === "ta"
                  ? "வியாபார ஆலோசனை"
                  : "Business Consultation"}
              </li>

              <li>
                {language === "ta"
                  ? "ஆரோக்கிய ஆலோசனை"
                  : "Health Consultation"}
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-yellow-400 text-xl font-bold mb-6">
              {language === "ta"
                ? "தொடர்பு"
                : "Contact"}
            </h3>

            <div className="space-y-5 text-gray-300">

              <p>📞 +91 99527 24996</p>

              <p>💬 WhatsApp</p>

              <p>
                📍 #26B1, Karuvalur Road,
                <br />
                Sarkar Samakulam,
                <br />
                Kovilpalayam,
                <br />
                Near KMCH Hospital,
                <br />
                Coimbatore - 641107
              </p>

              <p>
                🕘 {language === "ta"
                  ? "திங்கள் - ஞாயிறு"
                  : "Monday - Sunday"}
                <br />
                9:30 AM - 6:30 PM
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-yellow-500/20">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()}{" "}
            {language === "ta"
              ? "ஸ்ரீ கௌசிக மகாசிவ வசிஷ்டர். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
              : "Sri Kousika Mahasiva Vasishtar. All Rights Reserved."}
          </p>

          <a
            href="#home"
            className="bg-yellow-500 text-black px-5 py-2 rounded-full font-bold hover:bg-yellow-400 transition"
          >
            {language === "ta"
              ? "↑ மேலே செல்ல"
              : "↑ Back to Top"}
          </a>

        </div>

      </div>

    </footer>
  );
}