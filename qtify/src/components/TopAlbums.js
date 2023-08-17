import React from "react";
import CardGrid from "./CardGrid";
import { useEffect } from "react";
import { useState } from "react";
export default function TopAlbums() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://qtify-backend-labs.crio.do/albums/top"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="p-3 text-white">Top Albums</h1>
        <p className="p-3 text-[#34c94b]">collapse</p>
      </div>
      <CardGrid data={data}></CardGrid>
    </div>
  );
}
