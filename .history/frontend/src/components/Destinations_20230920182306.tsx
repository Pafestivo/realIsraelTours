"use client";
import React, { useState } from "react";
import "@/styles/destinations.css";
import { Destination } from "@/app/utils/types";
import { destinationsArray } from "@/app/utils/DestinationsArray";
import Image from "next/image";

const Destinations = () => {
  const [activeTab, setActiveTab] = useState(destinationsArray[0]);

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
        {destinationsArray.map((destination: Destination) => {
          return (
            <div
              key={destination.name}
              className={activeTab === destination ? "activeTab" : ""}
              onClick={() => setActiveTab(destination)}
            >
              {destination.name}
            </div>
          );
        })}
      </div>
      <div className="Destination-info">
        <div>
          <h1>{activeTab.name}</h1>
          <p>{activeTab.description}</p>
        </div>
        <Image src={activeTab.image} alt={activeTab.name} />
      </div>
    </div>
  );
};

export default Destinations;
