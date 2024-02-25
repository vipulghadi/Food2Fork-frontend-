import React from "react";
import loading1 from "../assets/loading1.gif";
function LodingPage() {
  return (
    <div className="w-full h-screen flex justify-center items-center z-20 top-0 bg-white flex-col">
        <img src={loading1} alt="" />
        <p className="font-bold">Loading..</p>
    </div>
  );
}

export default LodingPage;
