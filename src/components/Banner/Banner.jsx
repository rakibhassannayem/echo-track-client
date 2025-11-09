import { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Banner = ({ challengeImg }) => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % challengeImg.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [challengeImg, isHovered]);

  const prevSlide = () =>
    setCurrent((current - 1 + challengeImg.length) % challengeImg.length);
  const nextSlide = () => setCurrent((current + 1) % challengeImg.length);

  return (
    <div
      className="relative w-full overflow-hidden bg-black rounded-2xl shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {challengeImg.map((src, i) => (
          <div key={i} className="w-full shrink-0 relative group">
            <img
              src={src}
              className="w-full h-[60vh] object-cover brightness-90"
              alt={`Challenge ${i + 1}`}
            />

            <div className="absolute inset-0 bg-linear-to-t from-green-500/30 via-green-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <button className="btn btn-primary text-primary font-semibold px-6 rounded-full shadow-lg hover:scale-105 transition-transform">
                View Challenge
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition cursor-pointer"
      >
        <BiChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition cursor-pointer"
      >
        <BiChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {challengeImg.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              current === i ? "bg-white w-4" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
