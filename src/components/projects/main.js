import React, { useRef, useLayoutEffect, useState } from "react";
import Projpic from "../../assets/parallax/project.webp";
import quote from "../../assets/quote.png";
import squarepic from "../../assets/parallax/square.png";
import earthpic from "../../assets/parallax/earth.png";
import plantpic from "../../assets/parallax/plant.png";
import pspic from "../../assets/parallax/ps.png";
import scrollpic from "../../assets/scroll.png";
import Rellax from "rellax";
import { motion, useAnimation } from "framer-motion";
import Grid from "./grid";

const mainVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
  quotehidden: {
    opacity: 0,
    x: 300,
  },
  quotevisible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
    },
  },
};

const Projectmain = () => {
  const headRef = useRef();
  const squareRef = useRef();
  const earthRef = useRef();
  const plantRef = useRef();
  const psRef = useRef();
  const quoteRef = useRef();
  const quoteControl = useAnimation();
  const [layoutpos, setLayoutpos] = useState(0);

  useLayoutEffect(() => {
    new Rellax(headRef.current, {
      speed: -6,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
    new Rellax(squareRef.current, {
      speed: 3,
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
    new Rellax(earthRef.current, {
      speed: -3,
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
    new Rellax(plantRef.current, {
      speed: -3,
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
    new Rellax(psRef.current, {
      speed: -2,
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });

    const handleScroll = () => {
      const position = window.pageYOffset;
      setLayoutpos(position);
      if (position > quoteRef.current.offsetTop - 300) {
        quoteControl.start("quotevisible");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className="projectht"
      variants={mainVariants}
      initial="hidden"
      animate="visible"
    >
      <section
        className="relative mt-10"
        style={{
          height: "200vh",
        }}
      >
        <h1
          className="absolute z-10 left-1/2 overlay__normal prj__icon"
          style={{
            transform: "translate(-50%, 20%)",
          }}
          ref={headRef}
        >
          PROJECTS.
        </h1>

        <div
          className="flex w-2/4 m-auto bg-cover rounded-sm h-4/5"
          style={{
            backgroundImage: `url(${Projpic})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            border: "18px solid #e0e0e0",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
          }}
        ></div>
        <div
          className="absolute w-2/4 opacity-80 top-96 left-40 h-1/6"
          style={{
            zIndex: "2",
          }}
          ref={squareRef}
        >
          <img src={squarepic} />
        </div>
        <div
          className="absolute w-3/12 top-96 right-36 opacity-90 h-1/6"
          style={{
            zIndex: "1",
            transform: "rotate(30deg)",
          }}
          ref={earthRef}
        >
          <img src={earthpic} />
        </div>
        <div
          className="absolute w-2/6 left-32 bottom-96 h-1/6"
          style={{
            zIndex: "-1",
          }}
          ref={plantRef}
        >
          <img src={plantpic} />
        </div>
        <div
          className="absolute w-2/4 -right-56 bottom-96 h-1/6"
          style={{
            zIndex: "1",
          }}
          ref={psRef}
        >
          <img src={pspic} />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center w-full">
        <img
          src={scrollpic}
          className="object-cover mb-2"
          style={{
            width: "35px",
          }}
        />
        <span className="font-extrabold ">Scroll Down</span>
      </section>
      <motion.section
        className="transform translate-y-18"
        ref={quoteRef}
        variants={mainVariants}
        initial="quotehidden"
        animate={quoteControl}
      >
        <img src={quote} className="m-auto mb-4" />
      </motion.section>
      <section className="grid_container mt-28">
        <Grid layoutpos={layoutpos} />
      </section>
    </motion.div>
  );
};

export default Projectmain;
