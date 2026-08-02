export default function Gallery() {
  const images = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
  ];

  return (
    <section className="py-24 bg-[#0b0613]">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-yellow-400 uppercase tracking-widest font-bold">
          Gallery
        </p>

        <h2 className="text-5xl font-bold gold-text mt-3 mb-12">
          புகைப்படங்கள்
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-yellow-500/20 hover:border-yellow-400 transition"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-80 object-cover hover:scale-110 duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}