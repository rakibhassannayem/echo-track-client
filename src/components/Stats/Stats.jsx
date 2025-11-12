import { BiLeaf } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import { GoPeople } from "react-icons/go";

const Stats = ({ activeCount }) => {
  return (
    <div className="py-10 rounded-xl">
      <div className=" text-center">
        <h2 className="headings">Our Community Impact</h2>
        <p className="text-secondary mt-2">
          Real results from real people making a difference
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-5 p-5">
        <div className="bg-white flex gap-2 items-center py-5 pl-3 w-full rounded-xl border border-gray-200 ">
          <div className="bg-primary/10 rounded-full p-3">
            <FaTasks color="green" size={29} />
          </div>

          <div>
            <p className="text-3xl font-bold">{activeCount}</p>
            <p className="text-secondary">Active challenges</p>
          </div>
        </div>

        <div className="bg-white flex gap-2 items-center py-5 pl-3 w-full rounded-xl border border-gray-200 ">
          <div className="bg-primary/10 rounded-full p-3">
            <BiLeaf color="green" size={32} />
          </div>
          <div>
            <p className="text-3xl font-bold">2,450 kg</p>
            <p className="text-secondary">CO₂ Saved</p>
          </div>
        </div>

        <div className="bg-white flex gap-2 items-center py-5 pl-3 w-full rounded-xl border border-gray-200">
          <div className="bg-primary/10 rounded-full p-3">
            <GoPeople color="green" size={32} />
          </div>
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
