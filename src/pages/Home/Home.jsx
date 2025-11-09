import { useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import Stats from "../../components/Stats/Stats";

const Home = () => {
  const data = useLoaderData();
  const challengeImg = data.map((challenge) => challenge.imageUrl);

  return (
    <div className="space-y-10">
      <Banner challengeImg={challengeImg} />
      <Stats />
    </div>
  );
};

export default Home;
