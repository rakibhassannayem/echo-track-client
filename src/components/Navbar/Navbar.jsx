import { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { toast } from "react-toastify";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Navbar = () => {
  const { user, setUser, logOut, loading } = use(AuthContext);
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "bg-primary text-white font-bold"
              : "font-medium hover:bg-primary hover:text-white hover:font-bold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/challenges"}
          className={({ isActive }) =>
            isActive
              ? "bg-primary text-white font-bold"
              : "font-medium hover:bg-primary hover:text-white hover:font-bold"
          }
        >
          Challenges
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink
              to={"/my-activities"}
              className={({ isActive }) =>
                isActive
                  ? "bg-primary text-white font-bold"
                  : "font-medium hover:bg-primary hover:text-white hover:font-bold"
              }
            >
              My Activites
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/add-challenge"}
              className={({ isActive }) =>
                isActive
                  ? "bg-primary text-white font-bold"
                  : "font-medium hover:bg-primary hover:text-white hover:font-bold"
              }
            >
              Add Challenge
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const profileImgLinks = (
    <>
      {user && (
        <>
          <li>
            <NavLink
              to={"/my-challenges"}
              className={({ isActive }) =>
                isActive
                  ? "bg-primary text-white font-bold"
                  : "font-medium hover:bg-primary hover:text-white hover:font-bold"
              }
            >
              My Challenge
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("logged out");
        setUser(null);
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="container mx-auto flex">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <GiHamburgerMenu size={24} />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-1"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl font-bold p-0">
            <img className="w-12" src="/logo.png" alt="" />
            EcoTrack
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-1">{links}</ul>
        </div>
        <div className="navbar-end space-x-2">

          {loading ? (
            <LoadingSpinner />
          ) : user ? (
            <div className="dropdown dropdown-end z-50">
              <div tabIndex={0} role="button" className="btn btn-ghost avatar">
                <div className="w-9 border-2 border-gray-300 rounded-full">
                  <img
                    referrerPolicy="no-referrer"
                    src={
                      user.photoURL ||
                      "https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-8/256/User-green-icon.png"
                    }
                  />
                </div>
                <p className="font-semibold">{user.displayName}</p>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-md dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow space-y-1"
              >
                {profileImgLinks}

                <li>
                  <button
                    onClick={handleLogout}
                    className="text-red-500 font-medium hover:bg-primary hover:text-white"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to={"/login"} className="btn btn-primary">
                Login
              </Link>
              <Link to={"/register"} className="btn btn-primay">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
