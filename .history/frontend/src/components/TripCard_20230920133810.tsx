import Image from "next/image";
import React from "react";
import "@/styles/tripCard.css";

interface tripCardProps {
  image: string;
  tripName: string;
  tripDescription: string;
}

const TripCard = ({ image, tripName, tripDescription }: tripCardProps) => {
  return (
    <div className="tripCard">
      <Image className="tripIcon" src={image} alt="tripIcon" width={`200px`} />
      <h1>{tripName}</h1>
      <h1>{tripDescription}</h1>
    </div>
  );
};

export default TripCard;
