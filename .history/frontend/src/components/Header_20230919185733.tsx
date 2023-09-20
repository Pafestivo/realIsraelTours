import React from "react";
import Image from "next/image";
import logo from "@/app/assets/logo.png";
import Navbar from "./Navbar";
import "@/styles/";

const Header = () => {
  return (
    <div className="header">
      <Image src={logo} alt="logo" />
      <Navbar />
    </div>
  );
};

export default Header;
