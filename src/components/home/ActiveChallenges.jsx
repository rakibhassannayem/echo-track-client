import ChallengeCard from "../ChallengeCard/ChallengeCard";

const ActiveChallenges = ({ activeChallengesData }) => {
  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="headings">Active Challenges</h2>
        <p className="text-secondary mt-2">
          Join ongoing sustainability challenges
        </p>
      </div>
      {activeChallengesData.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-6">
          {activeChallengesData.map((challenge) => (
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
    </section>
  );
};

export default ActiveChallenges;
