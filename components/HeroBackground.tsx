export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#090510] via-[#13091d] to-[#090510]" />

      {/* Gold Glow Left */}
      <div className="absolute top-16 left-10 w-72 h-72 rounded-full bg-yellow-500/10 blur-[120px]" />

      {/* Gold Glow Right */}
      <div className="absolute bottom-16 right-10 w-96 h-96 rounded-full bg-yellow-400/10 blur-[150px]" />

      {/* Star Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,#FFD54A_1px,transparent_1px)] [background-size:35px_35px]" />

    </div>
  );
}