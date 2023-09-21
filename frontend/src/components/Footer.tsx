import React from "react";
import "@/styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import tripAdvisorLogo from "@/assets/tripadvisor.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-icons">
        <a
          target="_blank"
          href="https://www.google.com/maps/place/Real+Israel+Tours+-+%D7%A8%D7%99%D7%9C+%D7%99%D7%A9%D7%A8%D7%90%D7%9C+%D7%98%D7%99%D7%95%D7%9C%D7%99%D7%9D%E2%80%AD/@32.2677681,33.8622414,8z/data=!3m1!4b1!4m6!3m5!1s0x88c9ac8e91065741:0xa1cad3f51609a171!8m2!3d32.2723045!4d35.1818746!16s%2Fg%2F11stjb0nth?entry=tts&shorturl=1"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/company/real-israel-tours/?originalSubdomain=il"
        >
          <FontAwesomeIcon icon={faGoogle} />
        </a>
        <a
          target="_blank"
          href="https://www.tripadvisor.com/Attraction_Review-g293983-d25253834-Reviews-Real_Israel_Tours-Jerusalem_Jerusalem_District.html"
        >
          <Image
            className="trip-advisor-icon"
            src={tripAdvisorLogo}
            alt="trip advisor"
          />
        </a>
      </div>
      <p>&copy; 2023 ALL RIGHTS RESERVED</p>
    </div>
  );
};

export default Footer;
