import Image from "next/image";
import React from "react";
import "@/styles/tripCard.css";
import Link from "next/link";

interface tripCardProps {
  image: string;
  tripName: string;
  tripDescription: string;
  slag: string;
}

const TripCard = ({
  image,
  tripName,
  tripDescription,
  slag,
}: tripCardProps) => {
  return (
    <Link href={slag}>
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
    </Link>
  );
};

export default TripCard;
