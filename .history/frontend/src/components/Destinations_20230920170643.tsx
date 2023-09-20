"use client";

import React, { useState } from "react";
import "@/styles/destinations.css";

const Destinations = () => {
  const [activeTab, setActiveTab] = useState("Jerusalem");

  const destinationsArray = [
    {
      name: "Jerusalem",
      description: "",
    },
    {
      name: "Tel Aviv",
      description: "",
    },
    {
      name: "Haifa",
      description: "",
    },
    {
      name: "Negev",
      description: "",
    },
    {
      name: "Dead Sea",
      description: "",
    },
    {
      name: "Golan Heights",
      description: "",
    },
    {
      name: "Bethlehem",
      description: "",
    },
    {
      name: "Tzfat",
      description: "",
    },
    {
      name: "Eilat",
      description: "",
    },
    {
      name: "Egypt",
      description: "",
    },
    {
      name: "Jordan",
      description: "",
    },
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
        {/* Renders a list of destinations based on the array */}
        {destinationsArray.map(
          (destination: { name: string; description: string }) => {
            return (
              <div
                className={activeTab === destination.name ? "activeTab" : ""}
                onClick={() => setActiveTab(destination.name)}
              >
                {destination.name}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Destinations;
