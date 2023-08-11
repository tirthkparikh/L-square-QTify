import React from "react";
import cardImg from "../cardImg.png";
export default function Card() {
  return (
    <div className="flex-col  ml-2 justify-between h-[230px] w-[159px]">
      <div className=" mb-0">
        <img className=" w-[100%]" src={cardImg} alt="img"></img>
        <div className="bg-white  h-[30px] border top-5 rounded-b-lg">
          <div className="w-[100px] h-[23px] mt-[0.1rem] ml-1   rounded-lg border mr-0  bg-black">
            <div className="text-white  text-center text-xs ">
              100 Followers
            </div>
          </div>
        </div>
      </div>
      <div className="text-white ">Bollywood</div>
    </div>
  );
}
