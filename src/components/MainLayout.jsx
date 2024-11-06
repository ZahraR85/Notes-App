import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import { Outlet } from "react-router-dom";

const MainLayout = ({token}) => {
  return (
    <>
      <Navbar /> 
      <Hero token ={token}/>
      <main>
        <Outlet /> 
        </main>
      <Footer />
    </>
  );
};

export default MainLayout;
