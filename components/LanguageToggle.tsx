"use client";

import { useLanguage } from "../app/context/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center border border-yellow-500 rounded-full overflow-hidden">

      <button
        onClick={() => setLanguage("en")}
        className={`px-4 py-2 transition ${
          language === "en"
            ? "bg-yellow-500 text-black"
            : "bg-transparent text-white"
        }`}
      >
        EN
      </button>

      <button
        onClick={() => setLanguage("ta")}
        className={`px-4 py-2 transition ${
          language === "ta"
            ? "bg-yellow-500 text-black"
            : "bg-transparent text-white"
        }`}
      >
        தமிழ்
      </button>

    </div>
  );
}