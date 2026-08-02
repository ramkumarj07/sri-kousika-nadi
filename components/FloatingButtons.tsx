export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919952724996"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center text-3xl"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>

      {/* Call Button */}
      <a
        href="tel:+919952724996"
        className="fixed bottom-26 right-6 z-50 w-16 h-16 rounded-full bg-yellow-500 text-black shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center text-3xl"
        aria-label="Call Now"
      >
        📞
      </a>
    </>
  );
}