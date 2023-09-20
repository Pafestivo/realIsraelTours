"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import "@/styles/header.css";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
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
      </div>
      <button onClick={toggleMenu} className="hamburger">
        ☰
      </button>
      <button className="inquire">Inquire Now</button>
    </div>
  );
};

export default Header;
