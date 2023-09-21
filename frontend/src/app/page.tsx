import Header from "@/components/Header";
import "@/styles/homePage.css";
import BackgroundVideo from "@/components/BackgroundVideo";
import ScrollArrow from "@/components/ScrollArrow";
import TripCard from "@/components/TripCard";
import geoPoliticalIcon from "@/assets/Geopolitical-icon.png";
import religious from "@/assets/Religious-and-educational.png";
import egpyt from "@/assets/Egypt-and-Jordan.png";
import classicTours from "@/assets/classic-tours.png";
import Destinations from "@/components/Destinations";
import CustomerReviews from "@/components/CustomerReviews";
import Image from "next/image";
import tripAdvisorLogo from "@/assets/Accredited-logo-trip-advisor-22.svg";
import TravelWithConfidence from "@/components/TravelWithConfidence";
import Footer from "@/components/Footer";
import MobileStickyFooter from "@/components/MobileStickyFooter";

export default function Home() {
  return (
    <div>
      <Header currentlyActivePage="Home" />
      <div className="cta-div">
        <div className="content">
          <h1>Custom made Israeli adventures</h1>
          <button className="animated-cta">
            <span></span>Start Your Journey
          </button>
          <div className="cta-svg-container">
            <Image
              src={tripAdvisorLogo}
              alt="trip adviser logo"
              layout="responsive"
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

        <section className="tripTypes">
          <TripCard
            image={geoPoliticalIcon}
            tripName="Geopolitical Tours"
            tripDescription="Dive into Israel's political complexity by engaging with diverse perspectives."
          />

          <TripCard
            image={religious}
            tripName="Religious, Educational And Community Tours"
            tripDescription="Adventure through a spiritual journey in the holy land."
          />

          <TripCard
            image={egpyt}
            tripName="Egypt & Jordan"
            tripDescription="Take the ultimate Middle East tour."
          />

          <TripCard
            image={classicTours}
            tripName="Classic Tours"
            tripDescription="Treat your crew to their perfect Israel adventure"
          />
        </section>

        <section className="destinations">
          <div className="destination-container">
            <Destinations />
          </div>
        </section>

        <section className="customer-reviews">
          <CustomerReviews />
        </section>

        <section className="travel-with-confidence-section">
          <TravelWithConfidence />
        </section>
        <Footer />
        <MobileStickyFooter />
      </div>
    </div>
  );
}
