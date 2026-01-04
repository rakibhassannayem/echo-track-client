import { useEffect, useState } from "react";
import Banner from "../../components/home/Banner";
import Stats from "../../components/Stats/Stats";
import ActiveChallenges from "../../components/home/ActiveChallenges";
import EcoCategories from "../../components/home/EcoCategories";
import CommunityTips from "../../components/home/CommunityTips";
import Testimonials from "../../components/home/Testimonials";
import UpcomingEvents from "../../components/home/UpcomingEvents";
import WhyGoGreen from "../../components/home/WhyGoGreen";
import HowItWorks from "../../components/home/HowItWorks";
import FinalCTA from "../../components/home/FinalCTA";

const Home = () => {
  const [tipsData, setTipsData] = useState([]);
  const [activeChallengesData, setActiveChallengesData] = useState([]);
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [membersCount, setMembersCount] = useState(0);

  useEffect(() => {
    fetch("https://echo-track-server.vercel.app/active-challenges")
      .then((res) => res.json())
      .then((data) => {
        setActiveChallengesData(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("https://echo-track-server.vercel.app/tips")
      .then((res) => res.json())
      .then((data) => {
        setTipsData(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("https://echo-track-server.vercel.app/upcoming-events")
      .then((res) => res.json())
      .then((data) => {
        setEventsData(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("https://echo-track-server.vercel.app/members")
      .then((res) => res.json())
      .then((data) => {
        setMembersCount(data.members);
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-16 py-10">
      <Banner />
      <Stats activeCount={activeChallengesData.length} eventsCount={eventsData.length} membersCount={membersCount} />
      <ActiveChallenges activeChallengesData={activeChallengesData} />
      <EcoCategories />
      <CommunityTips tipsData={tipsData} loading={loading} />
      <Testimonials />
      <UpcomingEvents eventsData={eventsData} loading={loading} />
      <WhyGoGreen />
      <HowItWorks />
      <FinalCTA />
    </div>
  );
};

export default Home;
