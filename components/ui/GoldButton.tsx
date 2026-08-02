type GoldButtonProps = {
  text: string;
  href: string;
};

export default function GoldButton({
  text,
  href,
}: GoldButtonProps) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:scale-105"
    >
      {text}
    </a>
  );
}