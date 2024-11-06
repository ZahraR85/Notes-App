import Hero from "../components/Hero";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Hero />
      <main>
        <Outlet /> 
        </main>
    </>
  );
};

export default Home;
