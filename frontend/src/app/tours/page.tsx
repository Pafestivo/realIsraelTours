import AllTripCards from "@/components/AllTripCards";
import "@/styles/toursPage.css";
import Header from "@/components/Header";
import React from "react";

const Tours = () => {
  return (
    <div className="tours-page">
      <Header currentlyActivePage="Tours" />
      <div className="mock-header"></div>
      <div className="page-container">
        <h1 className="desktop-only">So, What's The Plan?</h1>
        <div className="trip-cards-container">
          <AllTripCards />
        </div>
      </div>
    </div>
  );
};

export default Tours;
