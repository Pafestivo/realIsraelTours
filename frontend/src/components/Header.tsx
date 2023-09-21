"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "@/styles/header.css";
import Link from "next/link";

interface HeaderProps {
  currentlyActivePage?: string;
}

const Header = ({ currentlyActivePage }: HeaderProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header ${isScrolled ? "" : "transparent"}`}>
      <Link href="/">
        <Image
          className="headerLogo"
          src="/logo.png"
          alt="logo"
          width={200}
          height={(9 / 16) * 200}
        />
      </Link>
      <div className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <button onClick={toggleMenu} className="close-button">
          ✕
        </button>{" "}
        <Link
          className={currentlyActivePage === "Home" ? "activated" : ""}
          href="/"
        >
          Home
        </Link>
        <Link
          className={currentlyActivePage === "Tours" ? "activated" : ""}
          href="/tours"
        >
          Tours
        </Link>
        <Link
          className={currentlyActivePage === "Gallery" ? "activated" : ""}
          href="/"
        >
          Gallery
        </Link>
        <Link
          className={currentlyActivePage === "AboutUs" ? "activated" : ""}
          href="/"
        >
          About Us
        </Link>
        <Link
          className={currentlyActivePage === "ContactUs" ? "activated" : ""}
          href="/"
        >
          Contact Us
        </Link>
        <hr className="mobile-only" />
        <p className="mobile-only">+972 52 335 5687</p>
        <p className="mobile-only">Elad@realisraeltours.com</p>
        <button className="inquire mobile-only">Inquire Now</button>
      </div>
      <button onClick={toggleMenu} className="hamburger">
        ☰
      </button>
      <button className="inquire desktop-only">Inquire Now</button>
    </div>
  );
};

export default Header;
