import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import Button from "./Button";

export default function Navbar() {
  return (
    <div className="h-[70px] m-0  bg-[#34C94B]   grid grid-flow-col">
      <div className="col-span-2">
        <Logo></Logo>
      </div>
      <div className="col-span-8">
        <Search></Search>
      </div>
      <div className="col-span-2">
        <Button></Button>
      </div>
    </div>
  );
}
