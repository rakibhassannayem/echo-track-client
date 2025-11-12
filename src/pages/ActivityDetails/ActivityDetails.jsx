import { BsArrowLeft } from "react-icons/bs";
import { Link, useLoaderData } from "react-router";

const ActivityDetails = () => {
  const { _id, progress, challengeId } = useLoaderData();
  console.log (_id, progress, challengeId);
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
        <progress
          className="progress progress-success text-primary"
          value="5"
          max="10"
        ></progress>
      </div>
    </div>
  );
};

export default ActivityDetails;
