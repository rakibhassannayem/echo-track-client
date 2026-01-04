import { use, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { FaUserCircle, FaEnvelope, FaCalendarAlt, FaEdit, FaSave, FaTimes } from "react-icons/fa";

const Profile = () => {
  const { user, setUser, updateUser } = use(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    displayName: user?.displayName || "",
    photoURL: user?.photoURL || "",
  });
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateUser({
        displayName: formData.displayName,
        photoURL: formData.photoURL,
      });

      // Update local context
      setUser({
        ...user,
        displayName: formData.displayName,
        photoURL: formData.photoURL,
      });

      toast.success("Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      toast.error("Failed to update profile: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto animate-in slide-in-from-bottom duration-500">
      {/* Profile Header Card */}
      <div className="card bg-base-100 shadow-xl border border-base-300 overflow-hidden">
        <div className="h-32 bg-linear-to-r from-primary to-emerald-600"></div>
        <div className="p-8 pt-0 relative">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6 -mt-16">
            <div className="avatar">
              <div className="w-32 h-32 rounded-3xl ring-8 ring-base-100 shadow-2xl overflow-hidden bg-base-100">
                <img
                  src={user?.photoURL || "https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-8/256/User-green-icon.png"}
                  className="object-cover w-full h-full"
                  alt="Profile"
                />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left pb-2">
              <h1 className="text-3xl font-bold text-base-content">{user?.displayName}</h1>
              <p className="text-secondary font-medium">{user?.email}</p>
            </div>
            <div className="pb-2">
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="btn btn-primary rounded-xl px-6 gap-2 shadow-lg shadow-primary/20"
                >
                  <FaEdit /> Edit Profile
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="btn btn-ghost rounded-xl"
                  >
                    <FaTimes /> Cancel
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="divider my-8"></div>

          {isEditing ? (
            <form onSubmit={handleUpdate} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control flex flex-col gap-2">
                  <label className="label">
                    <span className="label-text font-bold">Display Name</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered rounded-xl focus:input-primary"
                    value={formData.displayName}
                    onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                    required
                  />
                </div>
                <div className="form-control flex flex-col gap-2">
                  <label className="label">
                    <span className="label-text font-bold">Photo URL</span>
                  </label>
                  <input
                    type="url"
                    className="input input-bordered rounded-xl focus:input-primary"
                    value={formData.photoURL}
                    onChange={(e) => setFormData({ ...formData, photoURL: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className={`btn btn-primary rounded-xl px-10 gap-2 ${loading ? 'loading' : ''}`}
                  disabled={loading}
                >
                  {!loading && <FaSave />} Save Changes
                </button>
              </div>
            </form>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="p-4 bg-base-200 rounded-2xl text-secondary group-hover:text-primary transition-colors">
                    <FaUserCircle size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-secondary">Full Name</p>
                    <p className="text-lg font-semibold text-base-content">{user?.displayName}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="p-4 bg-base-200 rounded-2xl text-secondary group-hover:text-primary transition-colors">
                    <FaEnvelope size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-secondary">Email Address</p>
                    <p className="text-lg font-semibold text-base-content">{user?.email}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
