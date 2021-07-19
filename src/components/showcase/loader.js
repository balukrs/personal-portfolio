import React, { useState, useEffect } from "react";
import mountain_img from "../../assets/mountain.webp";
import Tilt from "react-parallax-tilt";
import { animate, motion, useAnimation } from "framer-motion";

const testVariable = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "easeOut",
      duration: 0.8,
    },
  },
  bghidden: {
    y: "80vh",
  },
  bgvisible: {
    y: 0,
    transition: {
      type: "easeOut",
      duration: 0.8,
    },
  },
};

const Loader = ({ trigger }) => {
  const head1 = useAnimation();
  const head2 = useAnimation();
  const bganime = useAnimation();

  const initamine = async () => {
    await bganime.start("bgvisible");
    await head1.start("visible");
    head2.start("visible");
  };

  const sequence = async () => {
    // trigger(false);
  };

  useEffect(() => {
    initamine();
    sequence();
  }, []);

  return (
    <>
      <div className="relative flex items-center justify-center w-full h-full overflow-hidden">
        <Tilt tiltMaxAngleX="5" tiltMaxAngleY="5">
          <motion.div
            variants={testVariable}
            initial="bghidden"
            animate={bganime}
            className="rounded-lg "
            style={{
              backgroundImage: `url(${mountain_img})`,
              height: "800px",
              width: "1800px",
              backgroundSize: "cover",
              backgroundPosition: "center 50%",
            }}
          ></motion.div>
        </Tilt>
        <div
          className="absolute flex left-1/2"
          style={{
            transform: "translate(-50%, 0)",
          }}
        >
          <motion.section
            variants={testVariable}
            initial="hidden"
            animate={head1}
          >
            <h1 className="text-white text-9xl hover:text-gray-900">
              PORTFOLIO
            </h1>
          </motion.section>
          <motion.section
            initial="hidden"
            animate={head2}
            variants={testVariable}
          >
            <h1 className="ml-10 text-gray-800 text-9xl">WEBSITE</h1>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default Loader;
