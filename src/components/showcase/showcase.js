import React from "react";
import Content from "./content";
import Loader from "./loader";
import { motion } from "framer-motion";

const contVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duraton: 1,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const Showcase = () => {
  return (
    <motion.div
      className="container flex w-screen h-screen"
      variants={contVariants}
      animate="visible"
      initial="hidden"
      exit="exit"
    >
      <Loader />
    </motion.div>
  );
};

export default Showcase;
