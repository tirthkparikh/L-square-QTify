import React from "react";
import logo from "../logo.png";
export default function Logo() {
  return (
    <div className="w-[55px] top-[20px] h-[34px] left-[22px] absolute">
      <img src={logo} alt="logo"></img>
    </div>
  );
}
