import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const ScrollArrow = () => {
  return <FontAwesomeIcon className="arrow-down" icon={faArrowDown} bounce />;
};

export default ScrollArrow;
