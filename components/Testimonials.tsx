"use client";

import { useLanguage } from "../app/context/LanguageContext";

export default function Testimonials() {
  const { language } = useLanguage();

  const testimonials =
    language === "ta"
      ? [
          {
            name: "ரமேஷ்",
            place: "கோயம்புத்தூர்",
            review:
              "மிகவும் துல்லியமான ஜோதிட ஆலோசனை. எனது தொழில் மற்றும் குடும்ப வாழ்க்கைக்கு சிறந்த வழிகாட்டுதல் கிடைத்தது.",
          },
          {
            name: "லட்சுமி",
            place: "சென்னை",
            review:
              "திருமண பொருத்தம் மிகவும் சரியாக இருந்தது. மிகவும் நம்பகமான நாடி ஜோதிட நிலையம்.",
          },
          {
            name: "பிரகாஷ்",
            place: "மதுரை",
            review:
              "மிகவும் பொறுமையாக அனைத்து சந்தேகங்களுக்கும் விளக்கம் அளித்தார். நன்றி.",
          },
        ]
      : [
          {
            name: "Ramesh",
            place: "Coimbatore",
            review:
              "Very accurate Nadi Astrology consultation. I received excellent guidance for my career and family.",
          },
          {
            name: "Lakshmi",
            place: "Chennai",
            review:
              "Marriage prediction was very accurate. Highly recommended.",
          },
          {
            name: "Prakash",
            place: "Madurai",
            review:
              "Very patient and knowledgeable astrologer. Explained everything clearly.",
          },
        ];

  return (
    <section
      id="testimonials"
      className="py-24 bg-[#0B0613]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-yellow-400 uppercase tracking-[4px] font-semibold">
            {language === "ta"
              ? "வாடிக்கையாளர் கருத்துகள்"
              : "TESTIMONIALS"}
          </p>

          <h2 className="gold-text text-5xl font-bold mt-4">
            {language === "ta"
              ? "எங்கள் வாடிக்கையாளர்கள் என்ன சொல்கிறார்கள்?"
              : "What Our Clients Say"}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="glass rounded-3xl p-8 border border-yellow-500/20 hover:border-yellow-400 transition-all duration-300"
            >
              <div className="text-yellow-400 text-2xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-300 italic leading-8">
                {item.review}
              </p>

              <div className="mt-8">
                <h3 className="text-yellow-400 text-xl font-bold">
                  {item.name}
                </h3>

                <p className="text-gray-400">
                  {item.place}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}