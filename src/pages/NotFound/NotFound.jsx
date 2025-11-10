import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center text-center">
      <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
      <p className="mb-2 text-2xl font-semibold">Oops! Page not found</p>
      <p className="mb-8 text-secondary">
        The page you're looking for doesn't exist.
      </p>
      <Link to={"/"} className="btn btn-primary">
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
