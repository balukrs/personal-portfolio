import React from "react";
import Projpic from "../../assets/parallax/project.webp";
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
      <section className="w-full h-screen">
        <div>
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
          className="flex items-center justify-center inline-block w-2/4 m-auto bg-cover rounded-xl h-3/4"
          style={{
            backgroundImage: `url(${Projpic})`,
          }}
        ></div>
      </section>
    </motion.div>
  );
};

export default Projectmain;
