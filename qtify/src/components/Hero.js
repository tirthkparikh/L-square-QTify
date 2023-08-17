import React from "react";
import hero from "../assets/hero.png";

export default function Hero() {
  return (
    <div className="flex justify-center h-[220px]">
      <img src={hero} alt="heroIMG"></img>
    </div>
  );
}
