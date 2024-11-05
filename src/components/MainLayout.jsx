import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar /> 
      <div className="container mx-auto">
        <Outlet /> 
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
