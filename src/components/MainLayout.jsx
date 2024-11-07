import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const MainLayout = ({isLoggedIn}) => {
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn}/> 
      <main>
        <Outlet /> 
        </main>
      <Footer />
    </>
  );
};

export default MainLayout;
