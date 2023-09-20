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
        <p>
          <Link href="/">Home</Link>
        </p>
        <p>
          <Link href="/">Tours</Link>
        </p>
        <p>
          <Link href="/">Gallery</Link>
        </p>
        <p>
          <Link href="/">About Us</Link>
        </p>
        <p>
          <Link href="/">Contact Us</Link>
        </p>
      </div>
      <button onClick={toggleMenu} className="hamburger">
        ☰
      </button>
      <button className="inquire">Inquire Now</button>
    </div>
  );
};

export default Header;
