import React from "react";
import Loader from "./Loader";
import RecipeCard from "./RecipeCard";

function ResultSection() {
  return <div className="w-full p-2  flex flex-col">

  <p className="uppercase font-bold text-[18px] mb-3">Result for you...</p>

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
