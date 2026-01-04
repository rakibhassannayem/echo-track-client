import { useEffect, useState } from "react";
import ChallengeCard from "../../components/ChallengeCard/ChallengeCard";
import { FaFilter } from "react-icons/fa";
import SkeletonLoading from "../../components/SkeletonLoading/SkeletonLoading";

const categories = [
  "All Categories",
  "Waste Reduction",
  "Energy Conservation",
  "Sustainable Transport",
  "Green Living",
  "Water Conservation",
];

const Challenges = () => {
  const [challenges, setChallenges] = useState([]);
  const [category, setCategory] = useState("All Categories");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchChallenges = async () => {
      setLoading(true);
      try {
        const query =
          category !== "All Categories"
            ? `?category=${encodeURIComponent(category)}`
            : "";
        const res = await fetch(
          `https://echo-track-server.vercel.app/challenges${query}`
        );
        const data = await res.json();
        setChallenges(data);
      } catch (error) {
        console.error("Error fetching challenges:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchChallenges();
  }, [category]);

  return (
    <div>
      <div className="mb-5 flex justify-between items-baseline">
        <div>
          <h2 className="headings">Sustainability Challenges</h2>
          <p className="text-secondary">
            Join challenges and make a measurable environmental impact
          </p>
        </div>

        {/* Filter Dropdown */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 px-10 flex items-center gap-2"
          >
            <FaFilter size={14} />
            {category}
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
          >
            {categories.map((cat) => (
              <li key={cat}>
                <a onClick={() => setCategory(cat)}>{cat}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {loading ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <SkeletonLoading />
          <SkeletonLoading />
          <SkeletonLoading />
          <SkeletonLoading />
          <SkeletonLoading />
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {challenges.length > 0 ? (
            challenges.map((challenge) => (
              <ChallengeCard key={challenge._id} challenge={challenge} />
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-500">
              No challenges found.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Challenges;
