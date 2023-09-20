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
        <div>Jerusalem</div>
        <div>Tel Aviv</div>
        <div>Haifa</div>
        <div>Negev</div>
        <div>Dead Sea</div>
        <div>Golan Heights</div>
        <div>Bethlehem</div>
        <div>Tzfat</div>
        <div>Eilat</div>
        <div>Egypt</div>
        <div>Jordan</div>
      </div>
    </div>
  );
};

export default Destinations;
