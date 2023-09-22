import Header from "@/components/Header";
import "@/styles/homePage.css";
import BackgroundVideo from "@/components/BackgroundVideo";
import ScrollArrow from "@/components/ScrollArrow";
import CustomerReviews from "@/components/CustomerReviews";
import TravelWithConfidence from "@/components/TravelWithConfidence";
import AllTripCards from "@/components/AllTripCards";
import { roboto } from "@/app/fonts";
import TabSwitcher from "@/components/TabSwitcher";
import { destinationsArray } from "./utils/DestinationsArray";

export default function Home() {
  return (
    <div className={roboto.className}>
      <Header currentlyActivePage="Home" />
      <div className="background-video-container">
        <div className="content">
          <h1>Custom made Israeli adventures</h1>
          <button className="animated-cta">
            <span></span>Start Your Journey
          </button>
          <div className="cta-svg-container">
            <img
              src="/Accredited-logo-trip-advisor-22.svg"
              alt="trip adviser logo"
            />
          </div>
          <ScrollArrow />
        </div>
        <BackgroundVideo />
      </div>
      <div className="pageContainer">
        <section className="whyTravelWithUs">
          <h1>Why Travel With Real Israel Tours?</h1>
          <p className="info-block">
            We craft experiences that speak to our participants. We are
            long-time hands-on professionals who thoroughly get to know our
            clients and dedicate ourselves optimizing each moment to
            specifically match its participants.
          </p>
          <p className="info-block">
            After 8 years, we have a vast and high-quality network of trusted
            connections with every type of activity, site, and speaker the
            country can offer, waiting to be meticulously chosen and built into
            another cohesive journey.
          </p>
          <p className="info-block">
            Our staff is also passionate about the inspirational potential of
            Israel experiences and prides themselves on their ability to create
            profound impact, every time. They are invested, from each logistical
            detail running smoothly to fostering your group’s overall sense of
            community.
          </p>
          <p className="info-block">
            Whatever your precise interests, we guarantee trips that explore
            Israel deep beneath the surface, to the Real Israel, the one that
            empowers us to think, feel, enjoy, and connect.
          </p>
        </section>

        <section className="trip-types-section">
          <AllTripCards />
        </section>

        <section className="destinations">
          <div className="destination-container">
            <div className="remarkable-destinations-container">
              <h1>Remarkable Destinations</h1>
              <p>
                Our travel experts build customized adventures, allowing you to
                discover any of this compelling country’s awe-inspiring sites.
                Whether you want to dive deep into history, religion, politics,
                culture or outdoors adventure, we can advise you on which iconic
                destinations to choose and build an experience in each tailored
                to your interests. Describe your dream trip and we’ll configure
                an itinerary that surpasses all your expectations.
              </p>
            </div>
            <TabSwitcher array={destinationsArray} />
          </div>
        </section>

        <section className="customer-reviews">
          <CustomerReviews />
        </section>

        <section className="travel-with-confidence-section">
          <TravelWithConfidence />
        </section>
      </div>
    </div>
  );
}
