"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import "@/styles/header.css";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header ${isScrolled ? "" : "transparent"}`}>
      <Image className="headerLogo" src={logo} alt="logo" />
      <div className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <button onClick={toggleMenu} className="close-button">
          ✕
        </button>{" "}
        <Link href="/">Home</Link>
        <Link href="/">Tours</Link>
        <Link href="/">Gallery</Link>
        <Link href="/">About Us</Link>
        <Link href="/">Contact Us</Link>
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
