import React, { useEffect } from "react";

import HeroSection from "../components/HeroSection";
import ResultSection from "../components/ResultSection";
import Loader from "../components/Loader";
import foodApi from "../api/FoodImage";
import recipeApi from "../api/RecipeQuery";
import { useState } from "react";
import LoadingPage from "./LoadingPage";
// import LodingPage from "./LodingPage";

function Home() {
  const [loading, setLoading] = useState(false)
  const [isError, setError] = useState(false)
  const [suggeations, setSuggestions] = useState(null)


  //loading all suggestions
useEffect(()=>{
  setLoading(true)
  recipeApi.getIngredients()
  .then((resp)=>{
    setLoading(false)
     if(resp.status="ok"){
     setSuggestions(resp.suggestions)
      console.log("page loaded");
     }
     else{
      setError(true)
     }

  })
  .catch((error)=>{
    setLoading(false)
    setError(true)
  })
},[])
  
 

  return (<>
    {loading?<LoadingPage/>:!isError?<div className="w-full flex flex-col items-center">
    <div className="hero-section  sm:w-11/12 w-full mt-[60px]">
      <HeroSection suggestions={suggeations} />
    </div>
    <div className="loader-section w-full ">
      <Loader />
    </div>
    <div className="result-section sm:w-11/12 w-full mt-4">
      <ResultSection />
    </div>
  </div>:null}
  </>
  );
}

export default Home;
