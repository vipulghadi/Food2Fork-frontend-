import React from "react";
import Loader from "./Loader";
import RecipeCard from "./RecipeCard";

function ResultSection() {
  return <div className="w-full p-2  flex flex-col">
  <p className="uppercase font-bold text-[18px] mb-1 ml-3">Result for </p>
  <div className="query ml-3 p-2 text-[14px] border  text-gray-500"><p>tomato and chicken</p></div>
  <div className="result-recipe w-full flex flex-wrap ">
  
  <RecipeCard/>
  <RecipeCard/>
  <RecipeCard/>
  <RecipeCard/>
  <RecipeCard/>
  <RecipeCard/>
  <RecipeCard/>
  <RecipeCard/>
  <RecipeCard/>
  <RecipeCard/>
  
  
  </div>

  
  </div>;
}

export default ResultSection;
