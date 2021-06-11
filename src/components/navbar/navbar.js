import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 w-full bg-white">
      <ul className="flex content-center justify-center p-3 custom__navbar">
        <li>Home Page</li>
        <li>About Me</li>
        <li>Projects</li>
        <li>Contact Me</li>
      </ul>
    </div>
  );
};

export default Navbar;
