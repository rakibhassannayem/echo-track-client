import { Link, useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import Stats from "../../components/Stats/Stats";
import ChallengeCard from "../../components/ChallengeCard/ChallengeCard";
import TipsCard from "../../components/TipsCard/TipsCard";
import { useEffect, useState } from "react";
import EventsCard from "../../components/EventsCard/EventsCard";
import { BiCheckCircle, BiLeaf } from "react-icons/bi";
import { FaUserSecret } from "react-icons/fa";

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
      {/* Community Tips */}
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
      {/* Upcoming Events */}
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
      {/* Why go green */}
      <div>
        <div className="mb-5 text-center">
          <h2 className="headings">Why Go Green?</h2>
          <p className="text-secondary mt-2">
            Small actions create big changes when we work together
          </p>
        </div>
        <div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <BiLeaf className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Protect Our Planet</h3>
              <p className="text-secondary">
                Reduce your carbon footprint and preserve natural resources for
                future generations
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                <FaUserSecret className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg">Build Community</h3>
              <p className="text-secondary">
                Connect with like-minded individuals and inspire others through
                your actions
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <BiCheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Track Progress</h3>
              <p className="text-secondary">
                Measure your impact with real data and celebrate your
                environmental wins
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* how it works */}
      <div>
        <div className="mb-5 text-center">
          <h2 className="headings">How It Works</h2>
          <p className="text-secondary mt-2">
            Three simple steps to start your sustainability journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto text-xl font-bold">
              1
            </div>
            <h3 className="font-semibold text-lg">Join a Challenge</h3>
            <p className="text-secondary">
              Browse our challenges and pick one that fits your lifestyle and
              goals
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto text-xl font-bold">
              2
            </div>
            <h3 className="font-semibold text-lg">Track Your Progress</h3>
            <p className="text-secondary">
              Log your daily actions and watch your environmental impact grow
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto text-xl font-bold">
              3
            </div>
            <h3 className="font-semibold text-lg">Share & Inspire</h3>
            <p className="text-secondary">
              Share your journey and tips with the community to inspire others
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
