import React from "react";

function RecipeCard() {
  return (
    <div className="sm:w-[250px] flex flex-col bg-white p-5 rounded-md w-full relative sm:mr-5 mb-5 shadow-2xl">
      <div className="dish-country absolute uppercase bg-[#ff5c01] text-white px-2 py-1 sm:text-[10px] text-[15px] rounded-md top-[25px] right-[25px]">
   
        India
      </div>
      <div className="img w-full h-[200px] bg-green-200">
        <img
          src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/09/Vegetable-Soup-main.jpg"
          alt=""
          className="object-cover h-full w-full"
        />
      </div> <div className="diet-type sm:text-[10px] text-[12px] ml-auto font-semibold text-gray-500">High Protein Non Vegetarian</div>
      <p className="font-bold uppercase mt-[1px] ">Recipe Name</p>
     
      <h4 className="sm:text-[12px]  text-[15px] uppercase text-color-1 font-semibold">
        Ingradients
      </h4>
      <p className="ingradients h-[80px] overflow-y-scroll sm:text-[12px] text-[18px] text-gray-700">
        10 Fish pieces,1 teaspoon Sunflower Oil optional,5 teaspoon Red Chilli
        powder,2 teaspoon Turmeric powder Haldi,Salt to taste,1 tablespoon Water
      </p>
      <button className="w-full px-2 py-2 rounded-md bg-[#ff5c01] text-white uppercase font-semibold mt-4  text-[15px]">Lets Try</button>
    </div>
  );
}

export default RecipeCard;
