import { Link, useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import Stats from "../../components/Stats/Stats";
import ChallengeCard from "../../components/ChallengeCard/ChallengeCard";
import TipsCard from "../../components/TipsCard/TipsCard";
import { useEffect, useState } from "react";
import EventsCard from "../../components/EventsCard/EventsCard";

const Home = () => {
  const challenges = useLoaderData();
  const [tipsData, setTipsData] = useState([]);
  const [activeChallengesData, setActiveChallengesData] = useState([]);
  const [eventsData, setEventsData] = useState([]);
  const challengeImg = challenges.map((challenge) => challenge.imageUrl);

  useEffect(() => {
    fetch("http://localhost:3000/active-challenges")
      .then((res) => res.json())
      .then((data) => setActiveChallengesData(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/tips")
      .then((res) => res.json())
      .then((data) => setTipsData(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/upcoming-events")
      .then((res) => res.json())
      .then((data) => setEventsData(data));
  }, []);

  return (
    <div className="space-y-10">
      <Banner challengeImg={challengeImg} />
      <Stats activeCount={activeChallengesData.length} />
      {/* Active Challenges */}
      <div className="rounded-xl">
        <div className="text-center mb-5">
          <h2 className="headings">Active Challenges</h2>
          <p className="text-secondary mt-2">
            Join ongoing sustainability challenges
          </p>
        </div>
        {activeChallengesData ? (
          <div className="grid md:grid-cols-3 gap-5">
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
      </div>
      .{/* Community Tips */}
      <div className="rounded-xl">
        <div className="mb-5 text-center">
          <h2 className="headings">Community Tips</h2>
          <p className="text-secondary mt-2">
            Learn from our eco-conscious members
          </p>
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
      .{/* Upcoming Events */}
      <div className="rounded-xl">
        <div className="mb-5 text-center">
          <h2 className="headings">Upcoming Events</h2>
          <p className="text-secondary mt-2">
            Join local sustainability events
          </p>
        </div>

        {!eventsData ? (
          <p>Loading....</p>
        ) : (
          <div className="grid md:grid-cols-4 gap-5">
            {eventsData.map((event) => (
              <EventsCard key={event._id} event={event}></EventsCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
