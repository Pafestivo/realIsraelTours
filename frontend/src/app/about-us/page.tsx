import Header from "@/components/Header";
import ScrollArrow from "@/components/ScrollArrow";
import React from "react";
import "@/styles/aboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <Header currentlyActivePage="AboutUs" />
      <div className="page-cover-photo">
        <div>
          <h1>Who is Real Israel?</h1>
          <ScrollArrow />
        </div>
        <img src="/images/full_quality/22.jpg" alt="Jerusalem trip" />
      </div>

      <div className="second-section">
        <h1>Josh & Elad</h1>
        <p>
          <span className="bold">Josh Koonin</span> grew up in Australia before
          making Israel his home. With a lifelong interest in exploring cultures
          and traditions, Josh has been sharing his passion for travel and
          Israel for over 10 years. Josh is a licensed Israeli tour guide and
          holds degrees in Law and Jewish Civilization and Culture. He has
          guided and worked with dozens of VIPs including delegations of foreign
          governments and journalists, and has the connections, experience, and
          skillset to build a once in a lifetime experience.
        </p>

        <p>
          <span className="bold">Elad Kanfi</span> is a passionate educator with
          a love for travel and exploring Israeli and Middle Eastern culture.
          Blessed with the charisma to bring groups together, a key eye for
          detail, and knowledge of every inch of Israel, Elad will work
          tirelessly to craft and tailor your Israel experience and to make it a
          once in a lifetime vacation.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
