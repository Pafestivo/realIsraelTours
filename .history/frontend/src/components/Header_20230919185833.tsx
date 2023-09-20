import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Navbar from "./Navbar";
import "@/styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <Image className="headerLogo" src={logo} alt="logo" />
      <Navbar />
    </div>
  );
};

export default Header;
