"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const ScrollArrow = () => {
  const [showArrow, setShowArrow] = useState(true); // State to control arrow visibility

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 0 && showArrow) {
        setShowArrow(false); // Hide the arrow if the user starts scrolling
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showArrow]); // Re-run the effect if showArrow changes

  return showArrow ? (
    <FontAwesomeIcon className="arrow-down" icon={faArrowDown} bounce />
  ) : null;
};

export default ScrollArrow;
