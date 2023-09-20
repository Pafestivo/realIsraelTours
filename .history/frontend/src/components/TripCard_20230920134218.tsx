import Image, { StaticImageData } from "next/image";
import React from "react";
import "@/styles/tripCard.css";

interface tripCardProps {
  image: StaticImageData;
  tripName: string;
  tripDescription: string;
}

const TripCard = ({ image, tripName, tripDescription }: tripCardProps) => {
  return (
    <div className="tripCard">
      <Image className="tripIcon" src={image} alt="tripIcon" />
      <h1>{tripName}</h1>
      <p>{tripDescription}</p>
    </div>
  );
};

export default TripCard;
