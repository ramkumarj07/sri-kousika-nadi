export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Golden Glow Left */}
      <div className="absolute top-20 left-0 w-80 h-80 rounded-full bg-yellow-400/15 blur-[120px]" />

      {/* Golden Glow Right */}
      <div className="absolute bottom-10 right-0 w-[420px] h-[420px] rounded-full bg-yellow-500/15 blur-[150px]" />

      {/* Soft Stars */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#FFD54A_1px,transparent_1px)] [background-size:40px_40px]" />

    </div>
  );
}