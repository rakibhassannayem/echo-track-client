import { use } from "react";
import { BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const AddChallenge = () => {
  const navigate = useNavigate();
  const { user } = use(AuthContext);

  const handleCreateChallange = (e) => {
    e.preventDefault();
    const startDate = new Date(e.target.startDate.value);
    const endDate = new Date(e.target.endDate.value);
    const duration = Math.max(
      0,
      Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24))
    );

    const formData = {
      title: e.target.title.value,
      category: e.target.category.value,
      description: e.target.description.value,
      duration,
      target: e.target.target.value,
      participants: 0,
      impactMetric: e.target.impactMetric.value,
      createdBy: user.email,
      startDate,
      endDate,
      imageUrl: e.target.imageUrl.value,
    };

    fetch("http://localhost:3000/challenges", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-linear-to-t from-primary/20 to-transparent py-3 rounded-lg">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-5">
        {/* Header */}
        <div className="mb-4">
          <h1 className="text-3xl font-bold flex items-center text-primary">
            <BiPlus size={30} />
            Create New Challenge
          </h1>
          <p className="text-secondary mt-1">
            Start a new eco-challenge for the community
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleCreateChallange} className="space-y-5">
          {/* title + category */}
          <div className="flex gap-4 flex-col md:flex-row">
            <div className="flex-1">
              <label className="font-medium text-primary">
                Challenge Title *
              </label>
              <input
                name="title"
                type="text"
                placeholder="e.g., Plastic-Free July"
                required
                className="w-full border border-gray-300 bg-base-200 font-medium rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex-1">
              <label className="font-medium text-primary">Category *</label>
              <select
                defaultValue={""}
                name="category"
                required
                className="select select-bordered w-full text-secondary font-medium focus:ring-primary  bg-base-200 font-medium"
              >
                <option value="" disabled>
                  Select category
                </option>
                <option value="Waste Reduction">Waste Reduction</option>
                <option value="Energy Conservation">Energy Conservation</option>
                <option value="Sustainable Transport">
                  Sustainable Transport
                </option>
                <option value="Green Living">Green Living</option>
                <option value="Water Conservation">Water Conservation</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="font-medium text-primary">Description *</label>
            <textarea
              name="description"
              placeholder="Describe the challenge goals and activities..."
              rows={3}
              required
              className="w-full border bg-base-200 font-medium border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Dates */}
          <div className="flex gap-4 flex-col md:flex-row">
            <div className="flex-1">
              <label className="font-medium text-primary">Start Date *</label>
              <input
                name="startDate"
                type="date"
                required
                className="w-full bg-base-200 font-medium text-secondary border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex-1">
              <label className="font-medium text-primary">End Date *</label>
              <input
                name="endDate"
                type="date"
                required
                className="w-full bg-base-200 font-medium text-secondary border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Target + Metric */}
          <div className="flex gap-4 flex-col md:flex-row">
            <div className="flex-1">
              <label className="font-medium text-primary">Target Goal *</label>
              <input
                name="target"
                type="text"
                placeholder="e.g., Reduce plastic waste"
                required
                className="w-full bg-base-200 font-medium border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex-1">
              <label className="font-medium text-primary">
                Impact Metric *
              </label>
              <input
                name="impactMetric"
                type="text"
                placeholder="e.g., kg plastic saved"
                required
                className="w-full border border-gray-300 bg-base-200 font-medium rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className="font-medium text-primary">Image URL</label>
            <input
              name="imageUrl"
              type="url"
              placeholder="https://example.com/image.jpg"
              className="w-full bg-base-200 font-medium border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button type="submit" className="flex-1 btn btn-primary">
              Create Challenge
            </button>
            <button
              type="button"
              onClick={() => navigate("/challenges")}
              className="flex-1 btn"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddChallenge;
