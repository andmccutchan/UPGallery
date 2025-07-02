import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="">
      <Link to="/">Home</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/upload">Upload</Link>
    </nav>
  );
};

export default Navbar;
