import Header from "@/components/Header";
import "@/styles/homePage.css";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="pageContainer">
        <h1>Why Travel With Real Israel Tours?</h1>
        <div className="info-block">
          We craft experiences that speak to our participants. We are long-time
          hands-on professionals who thoroughly get to know our clients and
          dedicate ourselves optimizing each moment to specifically match its
          participants.
        </div>
      </div>
    </div>
  );
}
