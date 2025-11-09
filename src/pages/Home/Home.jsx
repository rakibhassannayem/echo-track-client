import { useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import Stats from "../../components/Stats/Stats";

const Home = () => {
  const challenges = useLoaderData();
  const challengeImg = challenges.map((challenge) => challenge.imageUrl);

  return (
    <div className="space-y-10">
      <Banner challengeImg={challengeImg} />
      <Stats />

      {/* Active Challenges */}
      <div className="bg-base-300 py-10 px-5 rounded-xl">
        <div className="flex justify-between mb-5">
          <div className="text-center">
            <h2 className="headings">Active Challenges</h2>
            <p className="text-secondary mt-2">
              Join ongoing sustainability challenges
            </p>
          </div>
          <button className="btn btn-primary">View All</button>
        </div>

        {
          
        }
      </div>
    </div>
  );
};

export default Home;
