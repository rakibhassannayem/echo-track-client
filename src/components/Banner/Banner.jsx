import { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Link } from "react-router";
import SkeletonLoading from "../SkeletonLoading/SkeletonLoading";

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/challenges")
      .then((res) => res.json())
      .then((data) => {
        setChallenges(data);
        setLoading(false);
      });
  }, []);

  const challengeImg = challenges.map((challenge) => challenge.imageUrl);

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

  if (loading) {
    return <SkeletonLoading />;
  }

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
        {challenges.map((challenge) => (
          <div key={challenge._id} className="w-full shrink-0 relative group">
            <img
              src={challenge.imageUrl}
              className="w-full h-[60vh] object-cover brightness-90"
              alt={challenge.title}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-green-500/30 via-green-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Title overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
              <h2 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
                {challenge.title}
              </h2>
              <p className="text-lg">{challenge.target}</p>
              <Link
                to={`/challenge/details/${challenge._id}`}
                className="btn bg-primary/40 text-white font-semibold px-6 mt-4 rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                View Challenge
              </Link>
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
