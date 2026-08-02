"use client";

import { useLanguage } from "../app/context/LanguageContext";

export default function Contact() {
  const { language } = useLanguage();

  return (
    <section
      id="contact"
      className="py-24 bg-[#0B0613]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-yellow-400 uppercase tracking-[4px] font-semibold">
            {language === "ta" ? "தொடர்பு கொள்ளுங்கள்" : "CONTACT US"}
          </p>

          <h2 className="gold-text text-5xl md:text-6xl font-bold mt-4">
            {language === "ta"
              ? "எங்களை தொடர்பு கொள்ளுங்கள்"
              : "Get In Touch"}
          </h2>

          <p className="text-gray-300 mt-6 max-w-3xl mx-auto leading-8">
            {language === "ta"
              ? "உங்கள் ஜோதிட ஆலோசனைக்காக எங்களை தொடர்பு கொள்ளுங்கள்."
              : "Contact us today for authentic Nadi Astrology consultation."}
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Details */}

          <div className="glass rounded-3xl p-10">

            <h3 className="text-3xl text-yellow-400 font-bold mb-8">
              {language === "ta"
                ? "தொடர்பு விவரங்கள்"
                : "Contact Information"}
            </h3>

            <div className="space-y-8">

              <div>
                <h4 className="text-yellow-400 font-bold mb-2">
                  📞 {language === "ta" ? "தொலைபேசி" : "Phone"}
                </h4>

                <a
                  href="tel:+919952724996"
                  className="text-gray-300 hover:text-yellow-400"
                >
                  +91 99527 24996
                </a>
              </div>

              <div>
                <h4 className="text-yellow-400 font-bold mb-2">
                  💬 WhatsApp
                </h4>

                <a
                  href="https://wa.me/919952724996"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-yellow-400"
                >
                  {language === "ta"
                    ? "வாட்ஸ்அப்பில் தொடர்பு கொள்ளுங்கள்"
                    : "Chat on WhatsApp"}
                </a>
              </div>

              <div>
                <h4 className="text-yellow-400 font-bold mb-2">
                  📍 {language === "ta" ? "முகவரி" : "Address"}
                </h4>

                <p className="text-gray-300 leading-7">
                  #26B1, Karuvalur Road,
                  <br />
                  Sarkar Samakulam,
                  <br />
                  Kovilpalayam,
                  <br />
                  Near KMCH Hospital,
                  <br />
                  Coimbatore - 641107
                </p>
              </div>

              <div>
                <h4 className="text-yellow-400 font-bold mb-2">
                  🕘 {language === "ta" ? "பணிநேரம்" : "Working Hours"}
                </h4>

                <p className="text-gray-300">
                  {language === "ta"
                    ? "திங்கள் - ஞாயிறு"
                    : "Monday - Sunday"}
                  <br />
                  9:30 AM - 6:30 PM
                </p>
              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div className="glass rounded-3xl p-10">

            <h3 className="text-3xl text-yellow-400 font-bold mb-8">
              {language === "ta"
                ? "செய்தி அனுப்புங்கள்"
                : "Send a Message"}
            </h3>

            <form className="space-y-6">

              <input
                type="text"
                placeholder={
                  language === "ta"
                    ? "முழு பெயர்"
                    : "Full Name"
                }
                className="w-full bg-[#1A1222] border border-yellow-500/20 rounded-xl p-4 outline-none focus:border-yellow-400"
              />

              <input
                type="tel"
                placeholder={
                  language === "ta"
                    ? "தொலைபேசி எண்"
                    : "Phone Number"
                }
                className="w-full bg-[#1A1222] border border-yellow-500/20 rounded-xl p-4 outline-none focus:border-yellow-400"
              />

              <input
                type="email"
                placeholder={
                  language === "ta"
                    ? "மின்னஞ்சல் (விருப்பம்)"
                    : "Email (Optional)"
                }
                className="w-full bg-[#1A1222] border border-yellow-500/20 rounded-xl p-4 outline-none focus:border-yellow-400"
              />

              <textarea
                rows={5}
                placeholder={
                  language === "ta"
                    ? "உங்கள் கேள்வியை எழுதுங்கள்"
                    : "Write Your Question"
                }
                className="w-full bg-[#1A1222] border border-yellow-500/20 rounded-xl p-4 outline-none focus:border-yellow-400"
              />

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-xl transition"
              >
                {language === "ta"
                  ? "செய்தி அனுப்புங்கள்"
                  : "Send Message"}
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}