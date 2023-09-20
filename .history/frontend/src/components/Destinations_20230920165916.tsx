"use client";

import React, { useState } from "react";
import "@/styles/destinations.css";

const Destinations = () => {
  const [activeTab, setActiveTab] = useState("Jerusalem");

  const destinationsArray = [
    "Jerusalem",
    "Tel Aviv",
    "Haifa",
    "Negev",
    "Dead Sea",
    "Golan Heights",
    "Bethlehem",
    "Tzfat",
    "Eilat",
    "Egypt",
    "Jordan",
  ];

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
        {destinationsArray.map((destination: string) => {
          return <div>{destination}</div>;
        })}
        <div
          className={activeTab === "Jerusalem" ? "activeTab" : ""}
          onClick={() => setActiveTab("Jerusalem")}
        >
          Jerusalem
        </div>
        <div
          className={activeTab === "TelAviv" ? "activeTab" : ""}
          onClick={() => setActiveTab("TelAviv")}
        >
          Tel Aviv
        </div>
        <div
          className={activeTab === "Haifa" ? "activeTab" : ""}
          onClick={() => setActiveTab("Haifa")}
        >
          Haifa
        </div>
        <div
          className={activeTab === "Negev" ? "activeTab" : ""}
          onClick={() => setActiveTab("Negev")}
        >
          Negev
        </div>
        <div
          className={activeTab === "DeadSea" ? "activeTab" : ""}
          onClick={() => setActiveTab("DeadSea")}
        >
          Dead Sea
        </div>
        <div
          className={activeTab === "GolanHeights" ? "activeTab" : ""}
          onClick={() => setActiveTab("GolanHeights")}
        >
          Golan Heights
        </div>
        <div
          className={activeTab === "Bethlehem" ? "activeTab" : ""}
          onClick={() => setActiveTab("Bethlehem")}
        >
          Bethlehem
        </div>
        <div
          className={activeTab === "Tzfat" ? "activeTab" : ""}
          onClick={() => setActiveTab("Tzfat")}
        >
          Tzfat
        </div>
        <div
          className={activeTab === "Eilat" ? "activeTab" : ""}
          onClick={() => setActiveTab("Eilat")}
        >
          Eilat
        </div>
        <div
          className={activeTab === "Egypt" ? "activeTab" : ""}
          onClick={() => setActiveTab("Egypt")}
        >
          Egypt
        </div>
        <div
          className={activeTab === "Jordan" ? "activeTab" : ""}
          onClick={() => setActiveTab("Jordan")}
        >
          Jordan
        </div>
      </div>
    </div>
  );
};

export default Destinations;
