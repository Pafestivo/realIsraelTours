import React from "react";
import Image from "next/image";
import logo from "@/app/assets/logo.png";

const Navbar = () => {
  return (
    <div className="header">
      <Image src={logo} alt="logo" />
    </div>
  );
};

export default Navbar;
