type SectionTitleProps = {
  subtitle: string;
  title: string;
};

export default function SectionTitle({
  subtitle,
  title,
}: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <p className="text-yellow-400 uppercase tracking-[4px] font-semibold">
        {subtitle}
      </p>

      <h2 className="gold-text text-4xl md:text-5xl font-bold mt-4">
        {title}
      </h2>

      <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
    </div>
  );
}