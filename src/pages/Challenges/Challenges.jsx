import { useLoaderData } from "react-router";
import ChallengeCard from "../../components/ChallengeCard/ChallengeCard";

const Challenges = () => {
  const challenges = useLoaderData();

  return (
    <div>
      <div className="mb-5">
        <h2 className="text-primary headings">Sustainability Challenges</h2>
        <p className="text-secondary">
          Join challenges and make a measurable environmental impact
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {challenges.map((challenge) => (
          <ChallengeCard
            key={challenge._id}
            challenge={challenge}
          ></ChallengeCard>
        ))}
      </div>
    </div>
  );
};

export default Challenges;
