import { useEffect, useState } from "react";
import ChallengeCard from "../../components/ChallengeCard/ChallengeCard";
import { FaFilter, FaSearch, FaSortAmountDown } from "react-icons/fa";
import SkeletonLoading from "../../components/SkeletonLoading/SkeletonLoading";

const categories = [
  "All Categories",
  "Waste Reduction",
  "Energy Conservation",
  "Sustainable Transport",
  "Green Living",
  "Water Conservation",
];

const durationFilters = [
  "All Durations",
  "Short (< 7 days)",
  "Medium (7-21 days)",
  "Long (> 21 days)",
];

const sortOptions = [
  "Default",
  "Title (A-Z)",
  "Title (Z-A)",
  "Duration (Low to High)",
  "Duration (High to Low)",
  "Participants (Most Popular)",
];

const Challenges = () => {
  const [challenges, setChallenges] = useState([]);
  const [filteredChallenges, setFilteredChallenges] = useState([]);
  const [category, setCategory] = useState("All Categories");
  const [duration, setDuration] = useState("All Durations");
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("Default");
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

  // Client-side Filter, Search, and Sort
  useEffect(() => {
    let result = [...challenges];

    // Search Title
    if (searchTerm) {
      result = result.filter((challenge) =>
        challenge.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Duration Filter
    if (duration !== "All Durations") {
      if (duration.includes("Short")) {
        result = result.filter((c) => c.duration < 7);
      } else if (duration.includes("Medium")) {
        result = result.filter((c) => c.duration >= 7 && c.duration <= 21);
      } else if (duration.includes("Long")) {
        result = result.filter((c) => c.duration > 21);
      }
    }

    // Sort
    if (sort === "Title (A-Z)") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === "Title (Z-A)") {
      result.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sort === "Duration (Low to High)") {
      result.sort((a, b) => a.duration - b.duration);
    } else if (sort === "Duration (High to Low)") {
      result.sort((a, b) => b.duration - a.duration);
    } else if (sort === "Participants (Most Popular)") {
      result.sort((a, b) => b.participants - a.participants);
    }

    setFilteredChallenges(result);
  }, [challenges, searchTerm, duration, sort]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="headings text-3xl font-bold">Sustainability Challenges</h2>
          <p className="text-secondary mt-1">
            Join challenges and make a measurable environmental impact
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80 group">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary group-focus-within:text-primary transition-colors" />
          <input
            type="text"
            placeholder="Search challenges..."
            className="input input-bordered w-full pl-12 rounded-2xl focus:input-primary transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Controls Bar */}
      <div className="flex flex-wrap items-center gap-4 bg-base-200/50 p-4 rounded-3xl border border-base-300">
        {/* Category Filter */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-sm md:btn-md rounded-xl flex items-center gap-2 bg-base-100 border-base-300">
            <FaFilter className="text-primary" />
            <span className="hidden sm:inline">Category:</span> {category}
          </div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg border border-base-300 mt-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  className={category === cat ? "bg-primary text-white" : ""}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Duration Filter */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-sm md:btn-md rounded-xl flex items-center gap-2 bg-base-100 border-base-300">
            <FaFilter className="text-secondary" />
            <span className="hidden sm:inline">Duration:</span> {duration}
          </div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg border border-base-300 mt-2">
            {durationFilters.map((d) => (
              <li key={d}>
                <button
                  className={duration === d ? "bg-secondary text-white" : ""}
                  onClick={() => setDuration(d)}
                >
                  {d}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Sort Dropdown */}
        <div className="dropdown md:ml-auto">
          <div tabIndex={0} role="button" className="btn btn-sm md:btn-md rounded-xl flex items-center gap-2 bg-base-100 border-base-300">
            <FaSortAmountDown className="text-accent" />
            <span className="hidden sm:inline">Sort by:</span> {sort}
          </div>
          <ul tabIndex={0} className="dropdown-content dropdown-end menu bg-base-100 rounded-box z-[1] w-64 p-2 shadow-lg border border-base-300 mt-2 right-0">
            {sortOptions.map((opt) => (
              <li key={opt}>
                <button
                  className={sort === opt ? "bg-accent text-white" : ""}
                  onClick={() => setSort(opt)}
                >
                  {opt}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {loading ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <SkeletonLoading />
          <SkeletonLoading />
          <SkeletonLoading />
          <SkeletonLoading />
          <SkeletonLoading />
          <SkeletonLoading />
          <SkeletonLoading />
          <SkeletonLoading />
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredChallenges.length > 0 ? (
            filteredChallenges.map((challenge) => (
              <ChallengeCard key={challenge._id} challenge={challenge} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center space-y-4">
              <div className="text-6xl text-base-300">🔍</div>
              <h3 className="text-2xl font-bold text-base-content">No challenges found</h3>
              <p className="text-secondary">Try adjusting your search or filters to find what you're looking for.</p>
              <button
                className="btn btn-ghost btn-sm text-primary"
                onClick={() => {
                  setCategory("All Categories");
                  setDuration("All Durations");
                  setSearchTerm("");
                  setSort("Default");
                }}
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Challenges;
