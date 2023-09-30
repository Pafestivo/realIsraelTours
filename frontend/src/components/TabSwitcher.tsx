"use client";
import React, { useEffect, useState } from "react";
import "@/styles/tabSwitcher.css";
import { TabItem } from "@/app/utils/types";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import ImageWithLoading from "./ImageWithLoading";

interface TabSwitcherProps {
  array: { name: string; description: string; image: string }[];
}

const TabSwitcher = ({ array }: TabSwitcherProps) => {
  const [activeTab, setActiveTab] = useState(array[0]);

  useEffect(() => {
    console.log(activeTab);
  }, [activeTab]);

  const handleTabClick = (item: TabItem) => {
    setActiveTab(item);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        {/* Renders a list of items */}
        {array.map((item: TabItem) => {
          return (
            <div
              key={item.name}
              className={activeTab === item ? "activeTab" : ""}
              onClick={() => handleTabClick(item)}
            >
              {item.name}
            </div>
          );
        })}
      </div>
      <div className="tab-info">
        <div>
          <h1>{activeTab.name}</h1>
          <p>{activeTab.description}</p>
        </div>
        <ImageWithLoading src={activeTab.image} alt={activeTab.name} />
      </div>
    </div>
  );
};

export default TabSwitcher;
