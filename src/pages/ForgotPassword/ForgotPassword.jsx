import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router";

const ForgotPassword = () => {
  return (
    <div className="flex flex-col items-center mb-10">
      <div className="flex flex-col items-center">
        <img className="w-20" src="/logo.png" alt="" />
        <h2 className="headings">Reset Password</h2>
        <p className="text-secondary mt-2">
          Enter your email and we'll send you a link to reset your password
        </p>
      </div>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg mt-5 border p-4 pt-2">
        <div className="mb-2">
          <h3 className="headings text-xl!">Forgot Password</h3>
          <p className="text-secondary text-sm">
            Enter your email address below
          </p>
        </div>
        <form>
          <label className="label font-medium text-sm">Email</label>
          <input
            type="email"
            name="email"
            className="input w-full"
            placeholder="Enter your email"
            required
          />

          <button className="btn btn-primary mt-4 w-full">
            Reset Password
          </button>
        </form>

        <Link
          to={"/login"}
          className="text-sm flex items-center justify-center mt-5 text-secondary/80 hover:translate-x-1 transition"
        >
          <IoIosArrowRoundBack size={24}/> Back to login
        </Link>
      </fieldset>
    </div>
  );
};

export default ForgotPassword;
