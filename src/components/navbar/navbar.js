import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="sticky top-0 z-50 w-full p-2 bg-white">
      <ul className="flex content-center justify-center p-3 custom__navbar">
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>Projects</li>
        <li>Contact Me</li>
      </ul>
    </div>
  );
};

export default Navbar;
