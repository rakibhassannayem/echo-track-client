import { useState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";

const MyActivitiesCard = ({ challenge }) => {
  const {
    user_id,
    challengeId,
    _id,
    title,
    status,
    category,
    joinDate,
    duration,
    progress,
  } = challenge || {};
  const realJoinDate = new Date(joinDate).toLocaleDateString();
  const [progressCount, setProgressCount] = useState(progress);

  const updateProgress = (e) => {
    e.preventDefault();

    fetch(
      `https://echo-track-server.vercel.app/userChallenges/${challengeId}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then(() => {
        setProgressCount((prev) => prev + 1);
        toast.success("updated Successfully!");
      })
      .catch(() => {
        toast.error("Failed to update participants!");
      });
  };

  return (
    <div className="bg-white py-5 px-3 w-full rounded-xl border border-gray-200 ">
      <div className="flex gap-3 items-center">
        <h3 className="text-xl font-semibold">{title}</h3>
        <span
          className={`${
            status == "Ongoing"
              ? "bg-primary/90 text-white"
              : "bg-yellow-300 text-secondary"
          } px-3 py-0.5 rounded-full font-medium text-sm`}
        >
          {status}
        </span>
      </div>
      <p className="text-secondary mb-2">{category}</p>
      <div className="text-end text-primary font-medium">
        {((progressCount / 10) * 100).toFixed(0)}%
      </div>
      <progress
        className="progress progress-success text-primary"
        value={progressCount}
        max="10"
      ></progress>
      <div className="flex justify-between my-1">
        <p className="text-secondary">Joined: {realJoinDate}</p>
        <p className="text-secondary">{duration} days remaining</p>
      </div>
      <div className="space-x-3 my-3">
        {progressCount < 10 && (
          <button
            onClick={updateProgress}
            className="btn bg-primary text-white"
          >
            Update Progress
          </button>
        )}

        <Link to={`/my-activities/${user_id}`} className="btn">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MyActivitiesCard;
