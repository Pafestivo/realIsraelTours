import React from "react";
import "@/styles/travelWithConfidence.css";
import Image from "next/image";
import tripAdvisorLogo from "@/assets/Accredited-logo-trip-advisor-22.svg";
import CheckMark from "./CheckMark";

const TravelWithConfidence = () => {
  return (
    <div className="travel-with-confidence-container">
      <div className="svg-container">
        <Image
          src={tripAdvisorLogo}
          alt="trip advisor logo"
          layout="responsive"
        />
      </div>
      <h1>Travel With Confidence</h1>
      <div className="text-sections">
        <p>
          Focus on absorbing the wonders of Israel, trusting that Real Israel
          Tours will take care of your safety and cater to your every need.
        </p>
        <p>
          We are constantly up to date with what’s happening in Israel and in
          contact with authority, and we have thorough plans for every type of
          emergency.
        </p>
        <p>
          ou will be safe and have your needs anticipated. Since we truly take
          the time to understand each client, we tailor-make experiences to
          match your comforts, with itineraries where no detail is too small.
        </p>
        <p>
          Also, all trips enjoy the excellent customer service of an
          on-the-ground planner, ready to answer questions in real time and
          accommodate last minute desires to their best ability.{" "}
        </p>
        <p>
          We pride ourselves on being as flexible as possible and maintaining
          our client’s stress-free mindset, free to soak in the beauty of their
          perfect trip.{" "}
        </p>
      </div>

      <div className="checkList">
        <div className="checked-quality">
          <CheckMark />
          <p>Tailor-made for each client’s needs</p>
        </div>
        <div className="checked-quality">
          <CheckMark />
          <p>Situation monitoring room</p>
        </div>
        <div className="checked-quality">
          <CheckMark />
          <p>Covers all emergencies</p>
        </div>
        <div className="checked-quality">
          <CheckMark />
          <p>8 years of time-tested trust</p>
        </div>
        <div className="checked-quality">
          <CheckMark />
          <p>Flexible bookings</p>
        </div>
        <div className="checked-quality">
          <CheckMark />
          <p>On-the-ground planner</p>
        </div>
      </div>
      <button className="animated-cta">
        <span></span>Start Your Journey
      </button>
    </div>
  );
};

export default TravelWithConfidence;
