import Header from "@/components/Header";
import "@/styles/homePage.css";
import BackgroundVideo from "@/components/BackgroundVideo";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="cta-div">
        <div className="content">
          <h1>Custom made Israeli adventures</h1>
          <button>Start Your Journey</button>
          <p>{`>>`}</p>
        </div>
        <BackgroundVideo />
      </div>
      <div className="pageContainer">
        <h1>Why Travel With Real Israel Tours?</h1>
        <div className="info-block">
          We craft experiences that speak to our participants. We are long-time
          hands-on professionals who thoroughly get to know our clients and
          dedicate ourselves optimizing each moment to specifically match its
          participants.
        </div>
        <div className="info-block">
          After 8 years, we have a vast and high-quality network of trusted
          connections with every type of activity, site, and speaker the country
          can offer, waiting to be meticulously chosen and built into another
          cohesive journey.
        </div>
        <div className="info-block">
          Our staff is also passionate about the inspirational potential of
          Israel experiences and prides themselves on their ability to create
          profound impact, every time. They are invested, from each logistical
          detail running smoothly to fostering your group’s overall sense of
          community.
        </div>
        <div className="info-block">
          Whatever your precise interests, we guarantee trips that explore
          Israel deep beneath the surface, to the Real Israel, the one that
          empowers us to think, feel, enjoy, and connect.
        </div>
      </div>
    </div>
  );
}
