"use client";

import React, { useState } from "react";
import "@/styles/destinations.css";

const Destinations = () => {
  const [activeTab, setActiveTab] = useState("Jerusalem");

  return (
    <div className="destinations-div">
      <h1>Remarkable Destinations</h1>
      <p>
        Our travel experts build customized adventures, allowing you to discover
        any of this compelling country’s awe-inspiring sites. Whether you want
        to dive deep into history, religion, politics, culture or outdoors
        adventure, we can advise you on which iconic destinations to choose and
        build an experience in each tailored to your interests. Describe your
        dream trip and we’ll configure an itinerary that surpasses all your
        expectations.
      </p>
      <div className="destinations-options">
        <div className={activeTab === "Jerusalem" ? "activeTab" : ""}>
          Jerusalem
        </div>
        <div className={activeTab === "TelAviv" ? "activeTab" : ""}>
          Tel Aviv
        </div>
        <div className={activeTab === "Haifa" ? "activeTab" : ""}>Haifa</div>
        <div className={activeTab === "Negev" ? "activeTab" : ""}>Negev</div>
        <div className={activeTab === "DeadSea" ? "activeTab" : ""}>
          Dead Sea
        </div>
        <div className={activeTab === "GolanHeights" ? "activeTab" : ""}>
          Golan Heights
        </div>
        <div className={activeTab === "Bethlehem" ? "activeTab" : ""}>
          Bethlehem
        </div>
        <div className={activeTab === "Tzfat" ? "activeTab" : ""}>Tzfat</div>
        <div className={activeTab === "Eilat" ? "activeTab" : ""}>Eilat</div>
        <div className={activeTab === "Egypt" ? "activeTab" : ""}>Egypt</div>
        <div className={activeTab === "Jordan" ? "activeTab" : ""}>Jordan</div>
      </div>
    </div>
  );
};

export default Destinations;
