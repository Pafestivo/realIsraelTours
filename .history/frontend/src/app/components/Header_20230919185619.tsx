import React from "react";
import Image from "next/image";
import logo from "@/app/assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <Image src={logo} alt="logo" />
    </div>
  );
};

export default Header;
