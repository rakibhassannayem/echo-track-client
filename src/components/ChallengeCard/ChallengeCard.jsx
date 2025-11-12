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
  } = challenge;
  return (
    <Link
      to={`/challenges/details/${_id}`}
      className="group card bg-base-100 shadow-sm cursor-pointer hover:shadow-2xl"
    >
      <figure>
        <img className="w-full h-52 object-cover hover:scale-110 transition" src={imageUrl} alt="Shoes" />
      </figure>
      <div className="card-body py-2 px-3">
        <h2 className="card-title text-primary justify-between group-hover:text-green-500">
          {title}
          <div className="bg-green-50 text-secondary rounded-full px-3 py-1 text-sm">
            {category}
          </div>
        </h2>

        <p className="text-secondary text-base">{description}</p>

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
      </div>
    </Link>
  );
};

export default ChallengeCard;
