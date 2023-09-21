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
      <Image
        className="tripIcon"
        src={image}
        alt="tripIcon"
        width={130}
        height={130}
      />
      <h2>{tripName}</h2>
      <p>{tripDescription}</p>
    </div>
  );
};

export default TripCard;
