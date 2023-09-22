import SingleTourPage from "@/components/SingleTourPage";
import React from "react";

const Geopolitical = () => {
  return (
    <SingleTourPage
      tourTitle="Geopolitical Group Tours"
      tourBanner="/GeopoliticalThumbnail.png"
      promoTitle="Diving into Israel’s complex reality"
      promoDescription={[
        `In our geopolitical trips, we aim to give participants a sense of the multifaceted reality behind the oversimplified “Israeli-Palestinian Conflict” that pervades the media. At Real Israel tours, we lead dozens of geopolitical trips every year, inspiring hundreds of young leaders annually to return home inspired and equipped to engage in productive dialogues.`,
      ]}
      chapter1Title="Once in a lifetime Opportunities"
      chapter1Info={[
        `After 8 years of experience, our staff has a vast network of opportunities for experiences the majority of Israelis or Jewish educators would never have access to.
      We have quality relationships with time-tested powerful speakers from all nationalities, religions, regions, sides of the political spectrum, and professions.`,
        `From internationally-renowned journalists, high-ranking politicians, and decorated army generals to leaders of cultural minority groups and powerful grassroot movements, we ensure participants engage with people with fascinating ranges of expertise. Without Real Israel Tours, most would never imagine meeting such people, let alone having the opportunity to ask them their tough questions`,
      ]}
      chapter1Image="/GeopoliticalThumbnail.png"
      chapter2Image="/looking-yad-vashem.jpg"
      chapter2Info={[
        `We are also experts on creating and maintaining a thriving trip community, which is crucial for this emotionally dynamic experience.`,
        `We train staff to create a safe environment for participants as they process their empathy for families, soldiers, and organizations with contrasting opinions.`,
        `And we understand how to build and facilitate a trip flow that properly balances the group’s energy and mental wellbeing. Before the trip, we take the time to learn each group’s background, what situations might be particularly difficult and what might be the most ideal activities for everyone to unwind.`,
        `And during the trip, we’re with you in real time as the group’s energy fluctuates, ready to adapt to cater to their specific needs.`,
      ]}
      chapter2Title="A personalized nurturing environment"
      conclusionInfo={[
        `Our overall goal is to depolarize the conversation around Israel. We create an experience that shows the situation as a composite of infinite valid co-existing narratives. Real Israel Tour participants come home with the ability to provide nuance to the political statements circulating amongst their peers. After these experiences, they become passionate leaders in building a culture of more well-informed dialogue, changing the way Israel is discussed, in each of their communities. `,
        `Reach out today if you’re interested in taking your group on an adventure of a lifetime to radically shift their understanding of diverse perspectives and bring richer Israel discussions to your community.`,
      ]}
      conclusionTitle="Depolarizing The Conflict"
    />
  );
};

export default Geopolitical;
