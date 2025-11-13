import { use, useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { AuthContext } from "../../context/AuthContext";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import MyChallengeCard from "../../components/MyChallengeCard/MyChallengeCard";
import { Link } from "react-router";

const MyChallenges = () => {
  const { user } = use(AuthContext);
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/my-challenges?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setChallenges(data);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="mb-5">
          <h2 className="headings">My Challenges</h2>
          <p className="text-secondary mt-1">
            Challenges you've created for the community
          </p>
        </div>
        <Link to={"/add-challenge"}>
          <button className="btn bg-primary text-white font-bold flex items-center">
            <BiPlus size={30} />
            Add New Challenge
          </button>
        </Link>
      </div>
      {challenges.length ? (
        <div className="grid md:grid-cols-3  gap-5">
          {challenges.map((challenge, i) => (
            <MyChallengeCard
              key={i}
              challenge={challenge}
            />
          ))}
        </div>
      ) : (
        <p className="my-20 text-center text-secondary text-lg">
          You didn't add any challenge for the community
        </p>
      )}
    </div>
  );
};

export default MyChallenges;
