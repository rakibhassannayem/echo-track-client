import { useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  const data = useLoaderData();
  const challengeImg = data.map((challenge) => challenge.imageUrl);

  return (
    <div>
      <Banner challengeImg={challengeImg} />
    </div>
  );
};

export default Home;
