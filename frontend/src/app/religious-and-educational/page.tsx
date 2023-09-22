import SingleTourPage from "@/components/SingleTourPage";
import TabSwitcher from "@/components/TabSwitcher";
import React from "react";
import { educationalTripsArray } from "../utils/EducationalToursArray";

const ReligiousAndEducational = () => {
  return (
    <div>
      <SingleTourPage
        tourTitle="Community, Religious & Educational Tours"
        tourBanner="/ReligiousToursChristianOrgs.jpg"
        promoTitle="Venture on a Spiritual Journey"
        promoDescription={[
          `Our staff are experts in spiritual empowerment in the Holy Land and tailor-making deeply moving experiences for all types of communities.
        Jewish or Christian, whatever your group’s denomination, level of religiosity, age group, or size, we build religious trips that have touched the souls of all kinds of congregations, organizations, or youth groups.`,
        ]}
      />

      <section
        style={{
          background: "white",
        }}
      >
        <TabSwitcher array={educationalTripsArray} />
      </section>
    </div>
  );
};

export default ReligiousAndEducational;
