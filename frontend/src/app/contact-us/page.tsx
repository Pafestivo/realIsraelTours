import Header from "@/components/Header";
import ScrollArrow from "@/components/ScrollArrow";
import React from "react";
import "@/styles/contactUs.css";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div>
      <Header currentlyActivePage="ContactUs" />
      <div className="page-cover-photo">
        <div>
          <h1>Contact Us</h1>
          <ScrollArrow />
        </div>
        <img src="/images/full_quality/22.jpg" alt="Jerusalem trip" />
      </div>

      <section className="contact-form">
        <div className="form-container">
          <div className="form-context">
            <h2>Reach out now!</h2>
            <p>
              We’re looking forward to hearing from you, answering your
              questions, and discussing everything you’re looking for you or
              your organization’s perfect Israel experience.
            </p>

            <div className="contact-info">
              <p>Elad@RealIsraelTours.com</p>
              <p>(+1) 818 378 9204</p>
            </div>

            <Image
              src="/logo.png"
              alt="company logo"
              width={300}
              height={(9 / 16) * 300}
            />
          </div>

          <form action="https://formspree.io/f/mbjvzvbz" method="POST">
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="phone" name="phone" placeholder="Phone" required />
            <textarea name="message" placeholder="Message" required />
            <input className="submit-btn" type="submit" value="Send" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
