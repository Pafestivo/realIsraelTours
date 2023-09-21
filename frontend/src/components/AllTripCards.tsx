import React from "react";
import TripCard from "./TripCard";
import "@/styles/AllTripCards.css";

const AllTripCards = () => {
  return (
    <div className="trip-types">
      <TripCard
        image="/Geopolitical-icon.png"
        tripName="Geopolitical Tours"
        tripDescription="Dive into Israel's political complexity by engaging with diverse perspectives."
        slag="/geopolitical"
      />

      <TripCard
        image="/Religious-and-educational.png"
        tripName="Religious, Educational And Community Tours"
        tripDescription="Adventure through a spiritual journey in the holy land."
        slag="/religious-and-educational"
      />

      <TripCard
        image="/Egypt-and-Jordan.png"
        tripName="Egypt & Jordan"
        tripDescription="Take the ultimate Middle East tour."
        slag="/egypt-and-jordan"
      />

      <TripCard
        image="/classic-tours.png"
        tripName="Classic Tours"
        tripDescription="Treat your crew to their perfect Israel adventure"
        slag="/classic-tours"
      />
    </div>
  );
};

export default AllTripCards;
