import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link>Home</Link>
      <Link>Gallery</Link>
      <Link>Upload</Link>
    </nav>
  );
};

export default Navbar;
