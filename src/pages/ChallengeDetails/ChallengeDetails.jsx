import { useLoaderData } from "react-router";

const ChallengeDetails = () => {
  const challenge = useLoaderData();
  const { title, imageUrl } = challenge;
  return (
    <div>
      <p className="text-2xl font-bold">{title}</p>
      <img src={imageUrl} alt="" />
    </div>
  );
};

export default ChallengeDetails;
