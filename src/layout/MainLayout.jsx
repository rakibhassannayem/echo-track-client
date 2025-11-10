import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-4 px-3">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
