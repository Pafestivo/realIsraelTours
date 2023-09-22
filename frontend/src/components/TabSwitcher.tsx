"use client";
import React, { useState } from "react";
import "@/styles/tabSwitcher.css";
import { TabItem } from "@/app/utils/types";
import Image from "next/image";

interface TabSwitcherProps {
  array: { name: string; description: string; image: string }[];
}

const TabSwitcher = ({ array }: TabSwitcherProps) => {
  const [activeTab, setActiveTab] = useState(array[0]);

  return (
    <div className="tabs-container">
      <div className="tabs">
        {/* Renders a list of items */}
        {array.map((item: TabItem) => {
          return (
            <div
              key={item.name}
              className={activeTab === item ? "activeTab" : ""}
              onClick={() => setActiveTab(item)}
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
        <Image
          src={activeTab.image}
          alt={activeTab.name}
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default TabSwitcher;
