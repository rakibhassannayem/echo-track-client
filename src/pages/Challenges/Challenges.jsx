import { useLoaderData } from "react-router";
import ChallengeCard from "../../components/ChallengeCard/ChallengeCard";

const Challenges = () => {
  const challenges = useLoaderData();

  return (
    <div>
      profileImgLinks
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
