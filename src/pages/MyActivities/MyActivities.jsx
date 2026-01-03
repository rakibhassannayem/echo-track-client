import { use, useEffect, useState } from "react";
import { BiLeaf } from "react-icons/bi";
import { IoTrashBinOutline } from "react-icons/io5";
import { LuBadgeCheck } from "react-icons/lu";
import { SlGraph } from "react-icons/sl";
import { AuthContext } from "../../context/AuthContext";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import MyActivitiesCard from "../../components/MyActivitiesCard/MyActivitiesCard";

const MyActivities = () => {
  const { user } = use(AuthContext);
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [challengeCount, setChallengeCount] = useState("");
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    fetch(
      `https://echo-track-server.vercel.app/my-activities?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setChallengeCount(data.length);
        const mergedData = data.map((item) => ({
          ...item.challenge,
          status: item.status,
          progress: item.progress,
          joinDate: item.joinDate,
          challengeId: item.challengeId,
          user_id: item._id,
        }));

        const completed = mergedData.filter((ch) => ch.progress >= 10).length;
        setCompletedCount(completed);

        setChallenges(mergedData);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <div>
        <h1 className="headings mb-2">My Activities</h1>
        <p className="text-secondary">
          Track your sustainability journey and impact
        </p>
      </div>

      {/* stats */}
      <div className="flex flex-col md:flex-row justify-between gap-5 py-5">
        <div className="bg-base-100 flex gap-2 items-center py-5 pl-3 w-full rounded-xl border border-base-300 ">
          <div className="bg-primary/10 rounded-full p-3">
            <BiLeaf className="text-success" size={32} />
          </div>
          <div>
            <p className="text-3xl font-bold">2,450 kg</p>
            <p className="text-secondary">CO₂ Saved</p>
          </div>
        </div>

        <div className="bg-base-100 flex gap-2 items-center py-5 pl-3 w-full rounded-xl border border-base-300 ">
          <div className="bg-primary/10 rounded-full p-3">
            <IoTrashBinOutline className="text-success" size={32} />
          </div>
          <div>
            <p className="text-3xl font-bold">2,450 kg</p>
            <p className="text-secondary">Plastic Reduced</p>
          </div>
        </div>

        <div className="bg-base-100 flex gap-2 items-center py-5 pl-3 w-full rounded-xl border border-base-300 ">
          <div className="bg-primary/10 rounded-full p-3">
            <SlGraph className="text-success" size={32} />
          </div>
          <div>
            <p className="text-3xl font-bold">{challengeCount}</p>
            <p className="text-secondary">Joined Challenges</p>
          </div>
        </div>

        <div className="bg-base-100 flex gap-2 items-center py-5 pl-3 w-full rounded-xl border border-base-300">
          <div className="bg-primary/10 rounded-full p-3">
            <LuBadgeCheck className="text-success" size={32} />
          </div>
          <div>
            <p className="text-3xl font-bold">{completedCount}</p>
            <p className="text-secondary">Completed Challenge</p>
          </div>
        </div>
      </div>

      {/* my challanges */}
      <h1 className="headings mb-3">MY Challenge Progress</h1>
      <div className="space-y-3">
        {challenges.map((challenge, i) => (
          <MyActivitiesCard key={i} challenge={challenge} />
        ))}
      </div>
    </div>
  );
};

export default MyActivities;
