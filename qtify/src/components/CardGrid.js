import React from "react";
import Card from "./Card";
export default function CardGrid({ data }) {
  console.log(data);
  return (
    <div className=" grid grid-cols-7 gap-1">
      {data.map((item) => (
        <Card id={item.id} data={item}></Card>
      ))}
    </div>
  );
}
