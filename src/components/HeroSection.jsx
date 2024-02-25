import React from "react";
import heroImage from "../assets/hero.png";
import Serach from "./Serach";
import {getJson} from 'serpapi'
function HeroSection() {

  getJson({
    q: "Cheesecake",
    location: "Austin,Texas,United States",
    hl: "en",
    gl: "us",
    api_key: "secret_api_key"
  }, (json) => {
    console.log(json["recipes_results"]);
  });




  return (
    <div className="w-full p-3 flex flex-wrap">
      <div className="left sm:w-5/12 w-full flex justify-center items-center mb-3 mt-2">
        <div className="box w-10/12">
          <div className="main-heading">
            <p className="font-bold text-[45px] leading-[50px]">
              Let Us  <span className="text-color-1">Predict</span> <br />
              Your Perfect  <span className="text-color-1">Meal</span>
            </p>
            <p className="mt-2 font-semibold">Welcome to Website name, where culinary creativity meets convenience! Input your ingredients, and discover personalized dish predictions tailored to your pantry. Simplify your cooking journey with our platform. Let's transform your ingredients into delightful meals effortlessly!</p>
            <div className="search-box mt-[15px]">
            
            <Serach/></div>
          </div>
        </div>
      </div>
      <div className="right sm:w-7/12 w-full">
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
