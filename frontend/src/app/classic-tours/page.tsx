import SingleTourPage from "@/components/SingleTourPage";
import React from "react";

const ClassicTours = () => {
  return (
    <SingleTourPage
      tourTitle="Classic Tours"
      tourBanner="/Eilat.jpg"
      promoTitle="Unforgettable memories with loved ones"
      promoDescription={[
        `Whether you are soccer fans or archeology enthusiasts, hikers or foodies, history buffs or night-life lovers, or all of the above, we will custom-make the perfect unforgettable Israel adventure for every member of the family.`,
        `We specialize in bar/bat mitzvah family trips private pilgrimage experiences and honeymoon trips but enjoy working with any couples or groups excited to experience the beauty of Israel.`,
        `Simply explain to our staff your range of interests and we’ll craft a compilation of ideas for you to choose from. Between snorkeling in the Red Sea, exploring antique markets, and helping in archaeological excavations, to eating exquisite food, visiting ancient religious sites, and hiking to waterfalls, we have something for everyone.`,
        `When you travel with Real Israel Tours, you will pack your trip with everything that thrills you and your crew personally, nothing more and nothing less. Allow us to help you create memories in Israel with your loved ones that you will all forever cherish.`,
      ]}
    />
  );
};

export default ClassicTours;
