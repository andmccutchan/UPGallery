import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-around text-stone-200 text-2xl py-2 px-4 border border-stone-200 w-1/2 mx-auto rounded-4xl my-2">
      <Link
        className="hover:underline transition-all duration-400 ease-in-out"
        to="/"
      >
        Home
      </Link>
      <Link className="hover:underline" to="/gallery">
        Gallery
      </Link>
      <Link className="hover:underline" to="/upload">
        Upload
      </Link>
    </nav>
  );
};

export default Navbar;
