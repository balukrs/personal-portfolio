import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { Context } from "../../context";

const Navbar = () => {
  const [state, dispatch] = useContext(Context);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname == "/projects") {
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [pathname]);

  const disPatcher = (val) => {
    dispatch({ type: "UPDATE_LOC", payload: val });
  };
  return (
    <div className="sticky top-0 z-50 w-full p-2 bg-white">
      <ul className="flex content-center justify-center p-3 custom__navbar">
        <li
          className={`under__effect ${pathname === "/" ? "under__lock" : ""}`}
          onMouseEnter={() => disPatcher("/")}
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
          onMouseEnter={() => disPatcher("/about")}
        >
          <Link
            to="/about"
            onClick={(e) => (pathname === "/about" ? e.preventDefault() : null)}
          >
            About Me
          </Link>
        </li>
        <li
          className={`under__effect ${
            pathname === "/projects" ? "under__lock" : ""
          }`}
          onMouseEnter={() => disPatcher("/projects")}
        >
          <Link
            to="/projects"
            onClick={(e) =>
              pathname === "/projects" ? e.preventDefault() : null
            }
          >
            Projects
          </Link>
        </li>
        <li
          className="under__effect"
          onMouseEnter={() => disPatcher("/contact")}
        >
          Contact Me
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
