import React from "react";
import search from "../search.png";
export default function Search() {
  return (
    <div className="absolute w-[568px] h-[40px] left-[336px] top-[13px]  flex flex-row">
      <input
        className="w-[90%] h-[100%] rounded-l-lg border border-[#121212]"
        type="text"
      ></input>
      <button className="w-[8%] bg-white border-l-0 h-[100%] rounded-r-lg border border-[#121212]">
        <img className="pl-3 mr-0" src={search} alt="search"></img>
      </button>
    </div>
  );
}
