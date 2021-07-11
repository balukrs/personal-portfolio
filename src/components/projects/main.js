import React, { useRef, useLayoutEffect } from "react";
import Projpic from "../../assets/parallax/project.webp";
import babypic from "../../assets/parallax/baby.png";
import squarepic from "../../assets/parallax/square.png";
import earthpic from "../../assets/parallax/earth.png";
import plantpic from "../../assets/parallax/plant.png";
import pspic from "../../assets/parallax/ps.png";
import Rellax from "rellax";
import { motion } from "framer-motion";

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
};

const Projectmain = () => {
  const headRef = useRef();
  const squareRef = useRef();
  const earthRef = useRef();
  const plantRef = useRef();
  const psRef = useRef();

  useLayoutEffect(() => {
    new Rellax(headRef.current, {
      speed: -10,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
    new Rellax(squareRef.current, {
      speed: 3,
      center: false,
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
        <div
          className="absolute z-10 left-1/2 overlay__normal"
          style={{
            transform: "translate(-50%, 20%)",
          }}
          ref={headRef}
        >
          <motion.h1 className=" prj__icon">PROJECTS.</motion.h1>
        </div>
        <div
          className="flex w-2/4 m-auto bg-cover rounded-sm h-4/5"
          style={{
            backgroundImage: `url(${Projpic})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            border: "18px solid #e0e0e0",
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
    </motion.div>
  );
};

export default Projectmain;
