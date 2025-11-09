
const Stats = ({activeCount}) => {
  return (
    <div className="bg-base-300 py-10 rounded-xl">
      <div className=" text-center">
        <h2 className="headings">Our Community Impact</h2>
        <p className="text-secondary mt-2">
          Real results from real people making a difference
        </p>
      </div>

      <div className="flex justify-between gap-5 p-5">
        <div className="bg-white flex items-center py-5 pl-3 w-full rounded-xl border border-gray-200">
          <img className="w-20 mr-2" src="/logo.png" alt="" />
          <div>
            <p className="text-3xl font-bold">{activeCount}</p>
            <p className="text-secondary">Active challenges</p>
          </div>
        </div>

        <div className="bg-white flex items-center py-5 pl-3 w-full rounded-xl border border-gray-200">
          <img className="w-20 mr-2" src="/logo.png" alt="" />
          <div>
            <p className="text-3xl font-bold">850</p>
            <p className="text-secondary">Active Members</p>
          </div>
        </div>

        <div className="bg-white flex items-center py-5 pl-3 w-full rounded-xl border border-gray-200">
          <img className="w-20 mr-2" src="/logo.png" alt="" />
          <div>
            <p className="text-3xl font-bold">850</p>
            <p className="text-secondary">Active Members</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
