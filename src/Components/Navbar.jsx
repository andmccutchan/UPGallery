import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center">
      <Link className="mx-2" to="/">
        Home
      </Link>
      <Link className="mx-2" to="/gallery">
        Gallery
      </Link>
      <Link className="mx-2" to="/upload">
        Upload
      </Link>
    </nav>
  );
};

export default Navbar;
