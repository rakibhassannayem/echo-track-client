const MyActivitiesCard = ({ challenge }) => {
  const { title, status, category, joinDate, duration, progress } = challenge;
  const realDate = new Date(joinDate).toLocaleDateString();
  return (
    <div className="bg-white py-5 px-3 w-full rounded-xl border border-gray-200 ">
      <div className="flex gap-3 items-center">
        <h3 className="text-xl font-semibold">{title}</h3>
        <span
          className={`${
            status == "Ongoing"
              ? "bg-yellow-300 text-secondary"
              : "bg-primary/90 text-white"
          } px-3 py-0.5 rounded-full font-medium text-sm`}
        >
          {status}
        </span>
      </div>
      <p className="text-secondary mb-2">{category}</p>
      <progress
        className="progress progress-success text-primary/80"
        value={progress}
        max="100"
      ></progress>
      <div className="flex justify-between my-1">
        <p className="text-secondary">Joined: {realDate}</p>
        <p className="text-secondary">{duration} days remaining</p>
      </div>
      <div className="space-x-3 my-3">
        <button className="btn bg-primary text-white">Update</button>
        <button className="btn btn-ghost">View Details</button>
      </div>
    </div>
  );
};

export default MyActivitiesCard;
