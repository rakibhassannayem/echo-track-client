import { MdOutlineCalendarToday, MdOutlinePeopleAlt } from "react-icons/md";
import { Link } from "react-router";

const ChallengeCard = ({ challenge }) => {
  const {
    _id,
    title,
    imageUrl,
    category,
    description,
    duration,
    participants,
    impactMetric,
  } = challenge;
  return (
    <div
      className="group card bg-base-100 shadow-sm cursor-pointer hover:shadow-2xl"
    >
      <figure>
        <img
          className="w-full h-42 object-cover hover:scale-110 transition"
          src={imageUrl}
          alt="Shoes"
        />
      </figure>
      <div className="card-body py-2 px-3">
        <div>
          <div className="card-title flex-col items-start justify-between group-hover:text-green-500">
            <span className="font-bold">{title}</span>
            <div className="bg-primary/10 text-secondary rounded-full px-3 py-1 text-sm">
              {category}
            </div>
          </div>
        </div>

        {/* <p className="text-secondary text-lg">{description}</p> */}

        <div className="card-actions justify-between text-base text-secondary">
          <div className="flex items-center gap-1">
            <MdOutlineCalendarToday />
            {duration} days
          </div>
          <div className="flex items-center gap-1">
            <MdOutlinePeopleAlt />
            {participants} joined
          </div>
        </div>

        <div className="mt-2">
          <Link
            to={`/challenge/details/${_id}`} className="btn btn-primary btn-sm btn-outline w-full rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
