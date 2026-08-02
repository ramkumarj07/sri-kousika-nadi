"use client";

import { useLanguage } from "../app/context/LanguageContext";

export default function Services() {
  const { language } = useLanguage();

  const services =
    language === "ta"
      ? [
          {
            icon: "🔮",
            title: "ஜாதகம் கணிப்பு",
            description: "உண்மையான நாடி ஜோதிடத்தின் மூலம் துல்லியமான ஜாதக கணிப்பு.",
          },
          {
            icon: "💍",
            title: "திருமண பொருத்தம்",
            description: "திருமண வாழ்க்கை சிறக்க துல்லியமான பொருத்தம் பார்க்கப்படும்.",
          },
          {
            icon: "💼",
            title: "தொழில் & வியாபாரம்",
            description: "வேலை, தொழில் மற்றும் வியாபார வளர்ச்சிக்கான ஆலோசனை.",
          },
          {
            icon: "🎓",
            title: "கல்வி",
            description: "கல்வி, உயர்கல்வி மற்றும் வெளிநாட்டு கல்வி ஆலோசனை.",
          },
          {
            icon: "✈️",
            title: "வெளிநாட்டு யோகம்",
            description: "வெளிநாட்டு வேலை, பயணம் மற்றும் குடியேற்ற வாய்ப்புகள்.",
          },
          {
            icon: "🪔",
            title: "பரிகார பூஜைகள்",
            description: "வாழ்க்கை முன்னேற்றத்திற்கான ஆன்மீக பரிகாரங்கள்.",
          },
          {
            icon: "❤️",
            title: "குடும்ப வாழ்க்கை",
            description: "குடும்ப அமைதி மற்றும் உறவு பிரச்சனைகளுக்கான தீர்வுகள்.",
          },
          {
            icon: "🏡",
            title: "வீடு & சொத்து",
            description: "வீடு வாங்குதல், சொத்து மற்றும் வாஸ்து ஆலோசனைகள்.",
          },
          {
            icon: "💰",
            title: "பணவரவு",
            description: "பணவரவு, முதலீடு மற்றும் செல்வ வளர்ச்சி ஆலோசனை.",
          },
        ]
      : [
          {
            icon: "🔮",
            title: "Horoscope Reading",
            description: "Accurate horoscope prediction through authentic Nadi Astrology.",
          },
          {
            icon: "💍",
            title: "Marriage Matching",
            description: "Marriage compatibility analysis for a happy married life.",
          },
          {
            icon: "💼",
            title: "Career & Business",
            description: "Career guidance, business growth and job opportunities.",
          },
          {
            icon: "🎓",
            title: "Education",
            description: "Higher education and overseas education guidance.",
          },
          {
            icon: "✈️",
            title: "Foreign Opportunities",
            description: "Foreign travel, work and settlement predictions.",
          },
          {
            icon: "🪔",
            title: "Spiritual Remedies",
            description: "Powerful poojas and remedies for success and peace.",
          },
          {
            icon: "❤️",
            title: "Family Life",
            description: "Solutions for family issues and relationship guidance.",
          },
          {
            icon: "🏡",
            title: "Property",
            description: "Property purchase, construction and vastu consultation.",
          },
          {
            icon: "💰",
            title: "Financial Growth",
            description: "Financial growth, investments and wealth predictions.",
          },
        ];

  return (
    <section
      id="services"
      className="py-24 bg-[#090510]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-yellow-400 uppercase tracking-[4px] font-semibold">
            {language === "ta" ? "எங்கள் சேவைகள்" : "OUR SERVICES"}
          </p>

          <h2 className="gold-text text-5xl md:text-6xl font-bold mt-4">
            {language === "ta"
              ? "நாங்கள் வழங்கும் சேவைகள்"
              : "Services We Offer"}
          </h2>

          <p className="text-gray-300 mt-6 max-w-3xl mx-auto leading-8">
            {language === "ta"
              ? "நாடி ஜோதிடத்தின் மூலம் வாழ்க்கையின் அனைத்து முக்கிய அம்சங்களுக்கும் ஆலோசனைகள் வழங்கப்படுகின்றன."
              : "We provide authentic Nadi Astrology guidance for every important stage of life."}
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="glass rounded-3xl p-8 border border-yellow-500/20 hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-6xl mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-300 leading-8">
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}