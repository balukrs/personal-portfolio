import React, { useState, useEffect } from "react";
import mountain_img from "../../assets/mountain.webp";
import Tilt from "react-parallax-tilt";
import { motion, useAnimation } from "framer-motion";

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
  dissapear: {
    opacity: 0,
    y: 20,
  },
  appear: {
    opacity: [0, 1],
    y: 0,
    transition: {
      type: "ease",
      duration: 1,
    },
  },
};

const Loader = ({ trigger }) => {
  const head1 = useAnimation();
  const head2 = useAnimation();
  const head3 = useAnimation();
  const bganime = useAnimation();

  const initamine = async () => {
    await bganime.start("bgvisible");
    await head1.start("visible");
    await head2.start("visible");
    await head3.start("appear");
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
        <Tilt tiltMaxAngleX="5" tiltMaxAngleY="5" tiltReverse={true}>
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
          className="absolute flex flex-col items-center justify-center left-1/2"
          style={{
            transform: "translate(-50%, 0)",
          }}
        >
          <div className="flex">
            <motion.section
              variants={testVariable}
              initial="hidden"
              animate={head1}
            >
              <motion.h1
                className="font-bold text-black text-9xl hover:text-gray-500 opacity-90"
                whileHover={{ x: -15 }}
              >
                PORTFOLIO
              </motion.h1>
            </motion.section>
            <motion.section
              initial="hidden"
              animate={head2}
              variants={testVariable}
            >
              <motion.h1
                className="ml-10 font-bold text-green-300 text-9xl hover:text-gray-500 opacity-90"
                whileHover={{ x: 15 }}
              >
                .WEBSITE
              </motion.h1>
            </motion.section>
          </div>
          <motion.div
            className="absolute mt-20 cursor-pointer -bottom-40"
            style={{
              height: "50px",
              width: "200px",
            }}
            whileHover={{ scale: 1.5 }}
            initial="dissapear"
            animate={head3}
            variants={testVariable}
          >
            <div className="border_rotate"></div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Loader;
