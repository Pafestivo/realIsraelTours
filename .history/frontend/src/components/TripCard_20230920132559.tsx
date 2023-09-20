import Image from "next/image";
import React from "react";

interface tripCardProps {
  image: string;
  tripName: string;
  tripDescription: string;
}

const TripCard = ({ image, tripName, tripDescription }: tripCardProps) => {
  return (
    <div className="tripCard">
      <Image src={image} alt="tripIcon" />
      <h1>{tripName}</h1>
      <h1>{tripDescription}</h1>
    </div>
  );
};

export default TripCard;
