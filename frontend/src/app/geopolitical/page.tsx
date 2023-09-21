import Header from "@/components/Header";
import ScrollArrow from "@/components/ScrollArrow";
import React from "react";

const Geopolitical = () => {
  return (
    <div>
      <Header currentlyActivePage="Tours" />
      <div className="page-cover-photo">
        <div>
          <h1>Geopolitical Group Tour</h1>
          <ScrollArrow />
        </div>
        <img src="/GeopoliticalThumbnail.png" alt="Geopolitical Tour" />
      </div>
    </div>
  );
};

export default Geopolitical;
