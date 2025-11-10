import { BiLeaf } from "react-icons/bi";
import { GoPeople } from "react-icons/go";
import { IoTrashBinOutline } from "react-icons/io5";
import { LuBadgeCheck } from "react-icons/lu";
import { SlGraph } from "react-icons/sl";

const MyActivities = () => {
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
        <div className="bg-white flex gap-2 items-center py-5 pl-3 w-full rounded-xl border border-gray-200 ">
          <div className="bg-primary/10 rounded-full p-3">
            <BiLeaf color="green" size={32} />
          </div>
          <div>
            <p className="text-3xl font-bold">2,450 kg</p>
            <p className="text-secondary">CO₂ Saved</p>
          </div>
        </div>

        <div className="bg-white flex gap-2 items-center py-5 pl-3 w-full rounded-xl border border-gray-200 ">
          <div className="bg-primary/10 rounded-full p-3">
            <IoTrashBinOutline color="green" size={32} />
          </div>
          <div>
            <p className="text-3xl font-bold">2,450 kg</p>
            <p className="text-secondary">Plastic Reduced</p>
          </div>
        </div>

        <div className="bg-white flex gap-2 items-center py-5 pl-3 w-full rounded-xl border border-gray-200 ">
          <div className="bg-primary/10 rounded-full p-3">
            <SlGraph color="green" size={32} />
          </div>
          <div>
            <p className="text-3xl font-bold">23</p>
            <p className="text-secondary">Active Days</p>
          </div>
        </div>

        <div className="bg-white flex gap-2 items-center py-5 pl-3 w-full rounded-xl border border-gray-200">
          <div className="bg-primary/10 rounded-full p-3">
            <LuBadgeCheck color="green" size={32} />
          </div>
          <div>
            <p className="text-3xl font-bold">5</p>
            <p className="text-secondary">Challengeg Complete</p>
          </div>
        </div>
      </div>

      {/* my challanges */}

      <h1 className="headings mb-3">My Challenges</h1>

      <div className="bg-white py-5 px-3 w-full rounded-xl border border-gray-200 ">
        <h3 className="text-xl font-semibold">Plastic-Free July</h3>
        <p className="text-secondary mb-2">Waste Reduction</p>
        <progress
          className="progress progress-success text-primary/80"
          value="40"
          max="100"
        ></progress>
        <div className="flex justify-between my-1">
          <p className="text-secondary">Joined: 7/1/2024</p>
          <p className="text-secondary">10 days remaining</p>
        </div>
        <div className="space-x-3 my-3">
          <button className="btn">Update</button>
          <button className="btn btn-ghost">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default MyActivities;
