import { BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router";

const AddChallenge = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-5">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-3xl font-bold flex items-center">
          <BiPlus size={36} className="text-primary" />
          Create New Challenge
        </h1>
        <p className="text-secondary mt-1">
          Start a new eco-challenge for the community
        </p>
      </div>

      {/* Form */}
      <form className="space-y-5">
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
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex-1">
            <label className="font-medium text-primary">Category *</label>
            <select
              name="category"
              required
              className="w-full border text-secondary border-base-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select category</option>
              <option value="Environment">Environment</option>
              <option value="Recycling">Recycling</option>
              <option value="Energy">Energy</option>
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
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Duration + Dates */}
        <div className="flex gap-4 flex-col md:flex-row">
          <div>
            <label className="font-medium text-primary">
              Duration (days) *
            </label>
            <input
              name="duration"
              type="number"
              min="1"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="font-medium text-primary">Start Date *</label>
            <input
              name="startDate"
              type="date"
              required
              className="w-full text-secondary border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="font-medium text-primary">End Date *</label>
            <input
              name="endDate"
              type="date"
              required
              className="w-full text-secondary border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
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
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex-1">
            <label className="font-medium text-primary">Impact Metric *</label>
            <input
              name="impactMetric"
              type="text"
              placeholder="e.g., kg plastic saved"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
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
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 btn btn-primary"
          >
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
  );
};

export default AddChallenge;
