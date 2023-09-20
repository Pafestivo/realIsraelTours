import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
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
  );
};
