import { Link, useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import Stats from "../../components/Stats/Stats";
import ChallengeCard from "../../components/ChallengeCard/ChallengeCard";
import TipsCard from "../../components/TipsCard/TipsCard";
import { useEffect, useState } from "react";

const Home = () => {
  const [tipsData, setTipsData] = useState([]);
  const challenges = useLoaderData();
  const challengeImg = challenges.map((challenge) => challenge.imageUrl);
  const today = new Date();
  const activeChallenges = challenges.filter((challenge) => {
    const endDate = new Date(challenge.endDate);
    return endDate >= today;
  });

  useEffect(() => {
    fetch("http://localhost:3000/tips")
      .then((res) => res.json())
      .then((data) => setTipsData(data));
  }, []);

  return (
    <div className="space-y-10">
      <Banner challengeImg={challengeImg} />
      <Stats activeCount={activeChallenges.length} />
      {/* Active Challenges */}
      <div className="py-10 px-5 rounded-xl">
        <div className="flex justify-between items-center mb-5">
          <div className="text-center">
            <h2 className="headings">Active Challenges</h2>
            <p className="text-secondary mt-2">
              Join ongoing sustainability challenges
            </p>
          </div>
          <Link to={"/challenges"} className="btn btn-primary">
            View All
          </Link>
        </div>
        {activeChallenges ? (
          <div className="grid md:grid-cols-3 gap-5">
            {activeChallenges.map((challenge) => (
              <ChallengeCard
                key={challenge._id}
                challenge={challenge}
              ></ChallengeCard>
            ))}
          </div>
        ) : (
          <p className="text-center text-primary text-lg font-medium">
            No active challenges available!
          </p>
        )}
      </div>
      .{/* Community Tips */}
      <div className="py-10 px-5 rounded-xl">
        <div className="flex justify-between items-center mb-5">
          <div className="text-center">
            <h2 className="headings">Community Tips</h2>
            <p className="text-secondary mt-2">
              Learn from our eco-conscious members
            </p>
          </div>
        </div>

        {!tipsData ? (
          <p>Loading....</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-5">
            {tipsData.map((tip) => (
              <TipsCard key={tip._id} tip={tip}></TipsCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
