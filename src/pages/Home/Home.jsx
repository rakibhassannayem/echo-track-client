import { Link, useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import Stats from "../../components/Stats/Stats";
import ChallengeCard from "../../components/ChallengeCard/ChallengeCard";

const Home = () => {
  const challenges = useLoaderData();
  const today = new Date();
  const activeChallenges = challenges.filter((challenge) => {
    const endDate = new Date(challenge.endDate);
    return endDate >= today;
  });

  const challengeImg = challenges.map((challenge) => challenge.imageUrl);
  return (
    <div className="space-y-10">
      <Banner challengeImg={challengeImg} />
      <Stats />

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
              <ChallengeCard challenge={challenge}></ChallengeCard>
            ))}
          </div>
        ) : (
          <p className="text-center text-primary text-lg font-medium">No active challenges available!</p>
        )}
      </div>
    </div>
  );
};

export default Home;
