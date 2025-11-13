import { use, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { GoGoal } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";
import { Link, useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";

const ChallengeDetails = () => {
  const challenge = useLoaderData();
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const [participantsCount, setParticipantsCount] = useState(
    challenge.participants
  );
  const {
    _id,
    title,
    imageUrl,
    category,
    description,
    duration,
    target,
    startDate,
    endDate,
    impactMetric,
  } = challenge;

  const handleJoinChallenge = (e) => {
    e.preventDefault();

    if (!user) {
      navigate("/login");
      return;
    }

    const userChallengeInfo = {
      userEmail: user.email,
      challengeId: _id,
      status: "Ongoing",
      progress: 0,
      joinDate: new Date().toISOString(),
    };

    fetch("https://echo-track-server.vercel.app/userChallenges", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userChallengeInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) {
          toast.error(
            data.message || "You have already joined this challenge!"
          );
          return;
        }

        fetch(`https://echo-track-server.vercel.app/challenges/${_id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then(() => {
            setParticipantsCount((prev) => prev + 1);
            toast.success("Joined Successfully!");
          })
          .catch(() => {
            toast.error("Failed to update participants!");
          });
      })
      .catch(() => {
        toast.error("Joining failed! Please try again later.");
      });
  };

  return (
    <div>
      {/* hero img */}
      <div className="relative h-screen max-h-[70vh]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-linear-to-t from-white via-white/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 -mt-70 relative z-10">
        <div className="max-w-4xl mx-auto rounded-xl">
          <Link to={"/challenges"}>
            <button className="btn btn-ghost border-0 text-lg font-bold mb-4 flex items-center hover:-translate-x-3 transition">
              <BsArrowLeft size={18} />
              Back to Challenges
            </button>
          </Link>
          <div className="rounded-xl shadow-lg p-8 mb-8 bg-white">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <div className="badge font-medium bg-primary  text-white mb-3">
                  {category}
                </div>

                <h1 className="text-4xl font-bold mb-4">{challenge.title}</h1>

                <p className="text-lg text-secondary">{description}</p>
              </div>
              <button className="btn btn-primary" onClick={handleJoinChallenge}>
                Join Challenge
              </button>
            </div>

            <div className="divider"></div>
            {/* stat */}
            <div className="flex flex-col sm:flex-row gap-3 justify-between px-2">
              <div className="flex gap-2 items-center">
                <div className="bg-primary/10 rounded-full p-3">
                  <CiCalendar color="green" size={32} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl">{duration}</span>
                  <span className="text-secondary">Days</span>
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <div className="bg-primary/10 rounded-full p-3">
                  <IoIosPeople color="green" size={32} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl">{participantsCount}</span>
                  <span className="text-secondary">Participants</span>
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <div className="bg-primary/10 rounded-full p-3">
                  <GoGoal color="green" size={32} />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-gray-600">{target}</span>
                  <p className="text-secondary">Goal</p>
                </div>
              </div>
            </div>
            <div className="divider"></div>

            {/* Challenge Details */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Duration</h3>
                <p className="text-secondary">{duration} days</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Impact Metric</h3>
                <p className="text-secondary">{impactMetric}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Start Date</h3>
                <p className="text-secondary">
                  {new Date(startDate).toLocaleDateString()}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">End Date</h3>
                <p className="text-secondary">
                  {new Date(endDate).toLocaleDateString()}
                </p>
              </div>
            </div>

            {/* join */}
            <div className="mt-8 p-6 bg-primary/10 rounded-lg text-center">
              <h3 className="font-semibold text-lg mb-2">
                Ready to make an impact?
              </h3>
              <p className="text-secondary mb-4">
                Start from today. Tommorow is far away.
              </p>
              <button className="btn btn-primary" onClick={handleJoinChallenge}>
                Join Challenge Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeDetails;
