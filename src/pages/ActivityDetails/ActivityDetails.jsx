import { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useLoaderData } from "react-router";
import SkeletonLoading from "../../components/SkeletonLoading/SkeletonLoading";
import { FiTarget } from "react-icons/fi";

const ActivityDetails = () => {
  const { _id, progress, challengeId } = useLoaderData();
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  const { imageUrl, title, description, target, category } = challenges;

  useEffect(() => {
    fetch(`https://echo-track-server.vercel.app/challenge/${challengeId}`)
      .then((res) => res.json())
      .then((data) => {
        setChallenges(data);
        setLoading(false);
      });
  }, [challengeId]);

  if (loading) {
    return <SkeletonLoading />;
  }
  return (
    <div className="max-w-4xl  mx-auto rounded-xl">
      <Link
        to={"/my-activities"}
        className="text-lg font-bold mb-4 flex gap-1 items-center hover:-translate-x-3 transition cursor-pointer"
      >
        <BsArrowLeft size={18} />
        Back to Challenges
      </Link>
      <div className="rounded-xl shadow-lg p-8 mb-8 bg-white">
        <img src={imageUrl} className="rounded-xl w-full" alt="{title}" />
        <div className="my-3">
          <div className="flex items-center justify-between">
            <h1 className="headings">{title}</h1>
            <span className="bg-primary/10 py-0.5 px-2 rounded-full font-medium text-secondary">
              {category}
            </span>
          </div>
          <p className="text-secondary text-lg">{target}</p>
        </div>
        <div className="bg-primary/10 p-5 rounded-xl border border-base-300">
          <div className="flex items-center gap-1 mb-4">
            <FiTarget size={32} />
            <h1 className="text-2xl font-medium">Your Progress</h1>
          </div>
          <div className="flex justify-between text-primary font-medium items-center">
            <p>Overall Progress</p>
            {((progress / 10) * 100).toFixed(0)}%
          </div>
          <progress
            className="progress progress-success text-primary"
            value={progress}
            max="10"
          ></progress>
        </div>
        <h1 className="text-secondary text-lg mt-3">{description}</h1>
      </div>
    </div>
  );
};

export default ActivityDetails;
