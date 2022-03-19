import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Club() {
  let location = useLocation();
  const [data, setData] = useState(location.state.club);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",

          height: "200px",
          width: "70%",
          flexDirection: "column",
          backgroundColor: "white",
        }}
      >
        <span style={{ fontSize: "20px" }}>Club Name: {data.club_name}</span>
        <span style={{ fontSize: "16px", marginBottom: "10px" }}>
          {data.description}
        </span>
        <span style={{ fontSize: "16px" }}>Category: {data.category[0]}</span>

        <span style={{ fontSize: "16px" }}>
          Total members :{data.members.length}
        </span>
        <span style={{ fontSize: "16px" }}>
          Total Posts: {data.posts.length}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100px",
          width: "30%",
          backgroundColor: "black",
        }}
      >
        {data.club_name}
      </div>
    </div>
  );
}
