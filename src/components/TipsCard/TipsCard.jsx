import { AiOutlineLike } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";

const TipsCard = ({ tip }) => {
  const { title, category, content, authorName, upvotes } = tip;
  
  return (
    <div className="card bg-base-100 shadow-sm cursor-pointer hover:scale-105 transition">
      <div className="card-body py-2 px-3">
        <h2 className="card-title text-primary justify-between">
          {title}
          <div className="bg-emerald-50 text-secondary rounded-full px-3 py-1 text-sm">
            {category}
          </div>
        </h2>

        <p className="text-secondary text-base">{content}</p>

        <div className="card-actions justify-between text-base text-secondary">
          <div className="flex items-center gap-1">
            <FaRegUserCircle />
            {authorName}
          </div>
          <div className="flex items-center gap-1">
            <AiOutlineLike />
            {upvotes}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsCard;
