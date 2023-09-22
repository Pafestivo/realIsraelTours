import SingleTourPage from "@/components/SingleTourPage";
import React from "react";

const ReligiousAndEducational = () => {
  return (
    <SingleTourPage
      tourTitle="Community, Religious & Educational Tours"
      tourBanner="/ReligiousToursChristianOrgs.jpg"
      promoTitle="Venture on a Spiritual Journey"
      promoDescription={[
        `Our staff are experts in spiritual empowerment in the Holy Land and tailor-making deeply moving experiences for all types of communities.
      Jewish or Christian, whatever your group’s denomination, level of religiosity, age group, or size, we build religious trips that have touched the souls of all kinds of congregations, organizations, or youth groups.`,
      ]}
    />
  );
};

export default ReligiousAndEducational;
