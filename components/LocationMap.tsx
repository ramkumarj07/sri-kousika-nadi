"use client";

import { useLanguage } from "../app/context/LanguageContext";

export default function LocationMap() {
  const { language } = useLanguage();

  return (
    <section className="py-24 bg-[#090510]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <p className="text-yellow-400 uppercase tracking-[4px] font-semibold">
            {language === "ta"
              ? "எங்கள் இருப்பிடம்"
              : "OUR LOCATION"}
          </p>

          <h2 className="gold-text text-5xl font-bold mt-4">
            {language === "ta"
              ? "வருகை தாருங்கள்"
              : "Visit Our Office"}
          </h2>

          <p className="text-gray-300 mt-6 max-w-3xl mx-auto leading-8">
            {language === "ta"
              ? "கீழே உள்ள முகவரிக்கு நேரில் வருகை தந்து ஜோதிட ஆலோசனை பெறலாம்."
              : "Visit our astrology centre for a personal Nadi Astrology consultation."}
          </p>

        </div>

        <div className="rounded-3xl overflow-hidden border border-yellow-500 shadow-lg">

          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Kovilpalayam,Coimbatore&output=embed"
            className="w-full h-[500px]"
            loading="lazy"
          />

        </div>

      </div>
    </section>
  );
}