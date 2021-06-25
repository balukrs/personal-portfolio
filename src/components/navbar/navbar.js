import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className="sticky top-0 z-50 w-full p-2 bg-white">
      <ul className="flex content-center justify-center p-3 custom__navbar">
        <li
          className={`under__effect ${pathname === "/" ? "under__lock" : ""}`}
        >
          <Link
            to="/"
            onClick={(e) => (pathname === "/" ? e.preventDefault() : null)}
          >
            Home Page
          </Link>
        </li>
        <li
          className={`under__effect ${
            pathname === "/about" ? "under__lock" : ""
          }`}
        >
          <Link to="/about">About Me</Link>
        </li>
        <li className="under__effect">Projects</li>
        <li className="under__effect">Contact Me</li>
      </ul>
    </div>
  );
};

export default Navbar;
