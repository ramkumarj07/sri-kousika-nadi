"use client";

import { useLanguage } from "../app/context/LanguageContext";

export default function Appointment() {
  const { language } = useLanguage();

  return (
    <section className="py-24 bg-[#120818]">
      <div className="max-w-5xl mx-auto px-6">

        <div className="glass rounded-3xl p-10 border border-yellow-500/20">

          <p className="text-yellow-400 uppercase tracking-[4px] font-bold">
            {language === "ta"
              ? "நேரம் முன்பதிவு"
              : "BOOK APPOINTMENT"}
          </p>

          <h2 className="gold-text text-5xl font-bold mt-4 mb-10">
            {language === "ta"
              ? "ஆலோசனைக்கு நேரம் முன்பதிவு செய்யுங்கள்"
              : "Book Your Consultation"}
          </h2>

          <form className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder={
                language === "ta"
                  ? "முழு பெயர்"
                  : "Full Name"
              }
              className="p-4 rounded-xl bg-[#1a1222] border border-yellow-500/20 outline-none"
            />

            <input
              type="tel"
              placeholder={
                language === "ta"
                  ? "தொலைபேசி எண்"
                  : "Phone Number"
              }
              className="p-4 rounded-xl bg-[#1a1222] border border-yellow-500/20 outline-none"
            />

            <input
              type="date"
              className="p-4 rounded-xl bg-[#1a1222] border border-yellow-500/20 outline-none"
            />

            <select
              className="p-4 rounded-xl bg-[#1a1222] border border-yellow-500/20 outline-none"
            >
              <option>
                {language === "ta"
                  ? "ஜாதகம் கணிப்பு"
                  : "Horoscope Reading"}
              </option>

              <option>
                {language === "ta"
                  ? "திருமண பொருத்தம்"
                  : "Marriage Matching"}
              </option>

              <option>
                {language === "ta"
                  ? "தொழில் ஆலோசனை"
                  : "Career Guidance"}
              </option>

              <option>
                {language === "ta"
                  ? "ஆரோக்கிய ஆலோசனை"
                  : "Health Consultation"}
              </option>

              <option>
                {language === "ta"
                  ? "வியாபார ஆலோசனை"
                  : "Business Consultation"}
              </option>
            </select>

            <textarea
              rows={5}
              placeholder={
                language === "ta"
                  ? "உங்கள் கேள்வியை எழுதுங்கள்"
                  : "Write Your Question"
              }
              className="md:col-span-2 p-4 rounded-xl bg-[#1a1222] border border-yellow-500/20 outline-none"
            />

            <button
              type="submit"
              className="md:col-span-2 bg-yellow-500 hover:bg-yellow-400 text-black py-4 rounded-xl font-bold transition"
            >
              {language === "ta"
                ? "நேரம் முன்பதிவு செய்யுங்கள்"
                : "Book Appointment"}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}