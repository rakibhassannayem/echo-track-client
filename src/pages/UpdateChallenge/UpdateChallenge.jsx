import { GrDocumentUpdate } from "react-icons/gr";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";

const UpdateChallenge = () => {
  const challenge = useLoaderData();
  const navigate = useNavigate();

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
    createdAt,
    createdBy,
  } = challenge;

  const handleUpdateChallange = (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.title.value,
      category: e.target.category.value,
      description: e.target.description.value,
      duration: duration,
      target: e.target.target.value,
      participants: 0,
      impactMetric: e.target.impactMetric.value,
      createdBy: createdBy,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
      imageUrl: e.target.imageUrl.value,
      createdAt: createdAt,
      updatedAt: new Date(),
    };

    fetch(`http://localhost:3000/challenges/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("challenge updated successfully!");
      })
      .catch(() => {
        toast.error("Failed to update the challenge!");
      });
  };

  return (
    <div className="py-3 rounded-lg">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-5">
        {/* Header */}
        <div className="mb-4">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <GrDocumentUpdate size={24} />
            Update Challenge
          </h1>
          <p className="text-secondary mt-1">
            Start a new eco-challenge for the community
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleUpdateChallange} className="space-y-3">
          {/* title + category */}
          <div className="flex gap-4 flex-col md:flex-row">
            <div className="flex-1">
              <label className="text-lg font-semibold text-primary">
                Challenge Title *
              </label>
              <input
                name="title"
                type="text"
                defaultValue={title}
                placeholder="e.g., Plastic-Free July"
                required
                className="mt-1 w-full border text-secondary border-gray-300 bg-base-200 font-medium rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex-1">
              <label className="text-lg font-semibold text-primary">
                Category *
              </label>
              <select
                defaultValue={category}
                name="category"
                required
                className="mt-1 select select-bordered w-full text-secondary font-medium focus:ring-primary  bg-base-200"
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
            <label className="text-lg font-semibold text-primary">
              Description *
            </label>
            <textarea
              defaultValue={description}
              name="description"
              placeholder="Describe the challenge goals and activities..."
              rows={3}
              required
              className="mt-1 w-full border bg-base-200 text-secondary font-medium border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Dates */}
          <div className="flex gap-4 flex-col md:flex-row">
            <div className="flex-1">
              <label className="text-lg font-semibold text-primary">
                Start Date *
              </label>
              <input
                defaultValue={new Date(startDate).toISOString().split("T")[0]}
                name="startDate"
                type="date"
                required
                className="mt-1 w-full bg-base-200 font-medium text-secondary border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex-1">
              <label className="text-lg font-semibold text-primary">
                End Date *
              </label>
              <input
                defaultValue={new Date(endDate).toISOString().split("T")[0]}
                name="endDate"
                type="date"
                required
                className="mt-1 w-full bg-base-200 font-medium text-secondary border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Target + Metric */}
          <div className="flex gap-4 flex-col md:flex-row">
            <div className="flex-1">
              <label className="text-lg font-semibold text-primary">
                Target Goal *
              </label>
              <input
                defaultValue={target}
                name="target"
                type="text"
                placeholder="e.g., Reduce plastic waste"
                required
                className="mt-1 w-full bg-base-200 font-medium text-secondary border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex-1">
              <label className="text-lg font-semibold text-primary">
                Impact Metric *
              </label>
              <input
                defaultValue={impactMetric}
                name="impactMetric"
                type="text"
                placeholder="e.g., kg plastic saved"
                required
                className="mt-1 w-full border text-secondary border-gray-300 bg-base-200 font-medium rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className="text-lg font-semibold text-primary">
              Image URL
            </label>
            <input
              defaultValue={imageUrl}
              name="imageUrl"
              type="url"
              placeholder="https://example.com/image.jpg"
              className="mt-1 w-full bg-base-200 font-medium text-secondary border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button type="submit" className="flex-1 btn btn-primary">
              Update Challenge
            </button>
            <button
              type="button"
              onClick={() => navigate("/my-challenges")}
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

export default UpdateChallenge;
