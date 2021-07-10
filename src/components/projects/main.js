import React from "react";
import Projpic from "../../assets/parallax/project.webp";
import babypic from "../../assets/parallax/baby.png";
import ballpic from "../../assets/parallax/ball.png";
import earthpic from "../../assets/parallax/earth.png";
import plantpic from "../../assets/parallax/plant.png";

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
  return (
    <motion.div
      className="projectht"
      variants={mainVariants}
      initial="hidden"
      animate="visible"
    >
      <section className="relative w-full h-screen">
        <div className="absolute">
          <span>P</span>
          <span>R</span>
          <span>O</span>
          <span>J</span>
          <span>E</span>
          <span>C</span>
          <span>T</span>
          <span>S</span>
          <span>.</span>
        </div>
        <div
          className="flex inline-block w-2/4 m-auto bg-cover border-8 border-gray-200 rounded-sm h-3/4"
          style={{
            backgroundImage: `url(${Projpic})`,
          }}
        ></div>
        <div className="absolute top-0 left-0 w-1/5 opacity-50 h-1/5">
          <img src={ballpic} />
        </div>
        <div className="absolute right-0 w-1/5 top-48 opacity-80 h-1/5">
          <img src={earthpic} />
        </div>
        <div className="absolute left-0 w-1/5 bottom-20 h-1/5 opacity-80">
          <img src={plantpic} />
        </div>
      </section>
    </motion.div>
  );
};

export default Projectmain;
