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
        <div
          className={activeTab === "Jerusalem" ? "activeTab" : ""}
          onClick={() => setActiveTab("Jerusalem")}
        >
          Jerusalem
        </div>
        <div
          className={activeTab === "TelAviv" ? "activeTab" : ""}
          onClick={() => setActiveTab("Jerusalem")}
        >
          Tel Aviv
        </div>
        <div
          className={activeTab === "Haifa" ? "activeTab" : ""}
          onClick={() => setActiveTab("Jerusalem")}
        >
          Haifa
        </div>
        <div
          className={activeTab === "Negev" ? "activeTab" : ""}
          onClick={() => setActiveTab("Jerusalem")}
        >
          Negev
        </div>
        <div
          className={activeTab === "DeadSea" ? "activeTab" : ""}
          onClick={() => setActiveTab("Jerusalem")}
        >
          Dead Sea
        </div>
        <div
          className={activeTab === "GolanHeights" ? "activeTab" : ""}
          onClick={() => setActiveTab("Jerusalem")}
        >
          Golan Heights
        </div>
        <div
          className={activeTab === "Bethlehem" ? "activeTab" : ""}
          onClick={() => setActiveTab("Jerusalem")}
        >
          Bethlehem
        </div>
        <div
          className={activeTab === "Tzfat" ? "activeTab" : ""}
          onClick={() => setActiveTab("Jerusalem")}
        >
          Tzfat
        </div>
        <div
          className={activeTab === "Eilat" ? "activeTab" : ""}
          onClick={() => setActiveTab("Jerusalem")}
        >
          Eilat
        </div>
        <div
          className={activeTab === "Egypt" ? "activeTab" : ""}
          onClick={() => setActiveTab("Jerusalem")}
        >
          Egypt
        </div>
        <div
          className={activeTab === "Jordan" ? "activeTab" : ""}
          onClick={() => setActiveTab("Jerusalem")}
        >
          Jordan
        </div>
      </div>
    </div>
  );
};

export default Destinations;
