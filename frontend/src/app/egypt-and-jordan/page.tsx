import SingleTourPage from "@/components/SingleTourPage";
import React from "react";

const EgyptAndJordan = () => {
  return (
    <SingleTourPage
      tourTitle="Egypt & Jordan"
      tourBanner="/Jordan.jpg"
      promoTitle="Complete Middle Eastern Adventure"
      promoDescription={[
        `The Middle East is iconic with ancient civilizations, from powerful Pharaohs and the birth of religions, to cities carved from stone. So we don’t stop with Israel!
      Experience more of the region’s vibrant cultures, wild landscapes, and awe-inspiring historical sites that should be at the top of everyone’s bucket list.`,
        `But navigating these three countries smoothly and efficiently can get complicated. At Real Israel Tours, you can fully soak in all the legendary experiences of your choice, at your ideal pace, without having to worry about any logistics.`,
      ]}
      chapter1Title="Experience Middle East Magic"
      chapter1Info={[
        `At Real Israel Tours, you can fully soak in all the legendary experiences of your choice, at your ideal pace, without having to worry about any logistics.`,
        `Decide it’s time to bask in the glory of the Pyramids of Giza and Great Sphinx, travel back in time in the ancient stone city of Petra, revel the the desert’s majesty via Wadi Rum jeep safari or desert stargazing, cruise down the Nile past islands and temples, ride camels between ancient temples, or all of the above, and we will figure out the rest.`,
      ]}
      chapter1Image="/Egypt.jpg"
      chapter2Image="/Jordan.jpg"
      chapter2Title="Custom-made just for you"
      chapter2Info={[
        `Describe your dream Middle Eastern experience to our staff, and we’ll build your itinerary and create each booking to best match your preferences.`,
        `We will accommodate whichever country or countries, however many days, whatever your interests, whatever your travel style.`,
        `Maybe your group is most interested in Egypt’s antiquities, visiting the Karnak Temple, the Valleys of the Kings & Queens, Sam Simeon Monastery, and Luxor Temple. Or maybe your group would prefer to spend a lot of time soaking in Cairo and Amman.`,
        `Whether you enjoy luxury hotels or rustic Bedouin camp hostels, gourmet meals or the most authentic falafel stands, we ensure a package that’s carefully curated specifically for your group.`,
      ]}
      conclusionInfo={[
        `Rest assured that with our experience and connections, you’ll be safely and effortlessly guided between each mind-blowing adventure. You’ll be prepped for smooth border crossings, at ease with our trusted drivers, swept away by the best tour guides in the industry.`,
      ]}
      conclusionTitle="Our Guarantee"
    />
  );
};

export default EgyptAndJordan;
