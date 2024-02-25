import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ResultSection from "../components/ResultSection";
import Loader from "../components/Loader";
// import LodingPage from "./LodingPage";

function Home() {
  return <div className="w-full flex flex-col items-center"> 

 <div className="hero-section  sm:w-11/12 w-full mt-[60px]">
 <HeroSection/>
 </div>
 <div className="loader-section w-full ">
 <Loader/>
 </div>
 <div className="result-section sm:w-11/12 w-full mt-4">
 <ResultSection/>

 </div>
  </div>;
}

export default Home;
