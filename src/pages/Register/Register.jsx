import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, signinwithGoogle, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, email, photoURL, password);

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, and one special character."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        toast.success("Registration Successfull!");
        setUser(result.user);
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

  const handleGoogleRegister = () => {
    signinwithGoogle()
      .then((result) => {
        toast.success("Login Successfull!");
        setUser(result.user);
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };
  return (
    <div className="flex flex-col items-center mb-10">
      <div className="flex flex-col items-center">
        <img className="w-25" src="/logo.png" alt="" />
        <h2 className="headings">Join EcoTrack</h2>
        <p className="text-secondary mt-2">
          Start your sustainability journey today
        </p>
      </div>

      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg mt-5 border p-4 pt-2">
        <div className="mb-2">
          <h3 className="headings text-xl!">Create Account</h3>
          <p className="text-secondary text-sm">
            Sign up to join our eco-conscious community
          </p>
        </div>
        <form onSubmit={handleRegister}>
          <label className="label font-medium text-sm">Name</label>
          <input
            type="text"
            name="name"
            className="input w-full"
            placeholder="Enter your name"
            required
          />

          <label className="label font-medium text-sm">Email</label>
          <input
            type="email"
            name="email"
            className="input w-full"
            placeholder="Enter your email"
            required
          />

          <label className="label font-medium text-sm">Photo URL</label>
          <input
            type="text"
            name="photo"
            className="input w-full"
            placeholder="Enter the photo url"
          />

          <div className="relative">
            <label className="label font-medium text-sm">Password</label>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              className="input w-full"
              placeholder="Enter your password"
              required
            />
            <div
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 bottom-3 cursor-pointer hover:scale-110 transition"
            >
              {showPass ? (
                <FaRegEye size={14} color="green" />
              ) : (
                <FaRegEyeSlash size={14} color="green" />
              )}
            </div>
          </div>

          {error && (
            <p className="text-red-500 font-medium">
              Password must be at least 6 characters long and include at least
              one uppercase letter, one lowercase letter, and one special
              character.
            </p>
          )}

          <button className="btn btn-primary mt-4 w-full">Register</button>
        </form>

        <div className="divider divider-success text-secondary text-sm">
          OR CONTINUE WITH
        </div>

        {/* Google */}
        <button
          onClick={handleGoogleRegister}
          className="btn bg-white text-black border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Google Register
        </button>

        <p className="text-center text-secondary text-sm font-medium">
          Already have an account?
          <Link to={"/login"} className="text-primary">
            {" "}
            Login here
          </Link>
        </p>
      </fieldset>
    </div>
  );
};

export default Register;
