import { Link, NavLink, Outlet, useNavigate } from "react-router";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaHome, FaUser, FaClipboardList, FaPlusCircle, FaHistory, FaSignOutAlt, FaBars } from "react-icons/fa";
import { toast } from "react-toastify";

const DashboardLayout = () => {
  const { user, logOut, setUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Successfully logged out");
        setUser(null);
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const menuItems = [
    { label: "Overview", path: "/dashboard", icon: <FaHome /> },
    { label: "My Activities", path: "/dashboard/my-activities", icon: <FaHistory /> },
    { label: "My Challenges", path: "/dashboard/my-challenges", icon: <FaClipboardList /> },
    { label: "Add Challenge", path: "/dashboard/add-challenge", icon: <FaPlusCircle /> },
    { label: "Profile", path: "/dashboard/profile", icon: <FaUser /> },
  ];

  return (
    <div className="drawer lg:drawer-open">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-base-200 min-h-screen">
        {/* Navbar for Mobile */}
        <div className="navbar bg-base-100 shadow-sm lg:hidden border-b border-base-300">
          <div className="flex-none">
            <label htmlFor="dashboard-drawer" className="btn btn-square btn-ghost">
              <FaBars size={20} />
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 font-bold text-xl flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="w-8" />
            EcoTrack
          </div>
        </div>

        {/* Dashboard Main Content */}
        <main className="p-4 md:p-8">
          <Outlet />
        </main>
      </div>

      <div className="drawer-side z-50 shadow-xl">
        <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="menu p-0 w-80 min-h-full bg-base-100 text-base-content border-r border-base-300 flex flex-col">
          {/* Sidebar Header */}
          <div className="p-6 border-b border-base-300 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <img src="/logo.png" alt="Logo" className="w-10 group-hover:rotate-12 transition-transform" />
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">EcoTrack</span>
            </Link>
          </div>

          {/* Navigation Menu */}
          <ul className="p-4 space-y-2 flex-grow">
            <li className="menu-title text-secondary uppercase text-xs font-bold tracking-widest mt-2 mb-2">Menu</li>
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                      ? "bg-primary text-white shadow-lg shadow-primary/20"
                      : "hover:bg-primary/10 text-secondary hover:text-primary"
                    }`
                  }
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-semibold">{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Bottom User Profile Section */}
          <div className="p-4 border-t border-base-300 bg-base-200/50">
            <div className="flex items-center gap-3 p-2 bg-base-100 rounded-2xl shadow-sm border border-base-300">
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoURL || "https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-8/256/User-green-icon.png"} alt="User" />
                </div>
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="font-bold text-sm truncate">{user?.displayName}</p>
                <p className="text-xs text-secondary truncate">{user?.email}</p>
              </div>
              <button
                onClick={handleLogout}
                className="btn btn-ghost btn-circle btn-sm text-error hover:bg-error/10"
                title="Logout"
              >
                <FaSignOutAlt size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
