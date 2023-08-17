import React from "react";

export default function Card({ data }) {
  const { title, image, follows } = data;
  return (
    <div className="flex-col  ml-2 justify-between w-[159px] h-[205px] m-2">
      <div className=" mb-0">
        <img
          className=" w-[159px] h-[170px] rounded-t-md"
          src={image}
          alt="img"
        ></img>
        <div className="bg-white  h-[30px] border top-5 rounded-b-lg">
          <div className="w-[100px] h-[23px] mt-[0.1rem] ml-1   rounded-lg border mr-0  bg-black">
            <div className="text-white  text-center text-xs ">
              {follows} Followers
            </div>
          </div>
        </div>
      </div>
      <div className="text-white ">{title}</div>
    </div>
  );
}
