import React, { useState } from "react";
import Content from "./content";
import Loader from "./loader";
import { motion, AnimatePresence } from "framer-motion";

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
  const [init, setInit] = useState(true);
  const [final, setFinal] = useState(false);

  return (
    <motion.div
      className="container flex w-screen h-screen bg-rgb2"
      variants={contVariants}
      animate="visible"
      initial="hidden"
      exit="exit"
    >
      {final ? (
        <Content />
      ) : (
        <AnimatePresence onExitComplete={() => setFinal(true)}>
          {init && <Loader trigger={setInit} />}
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default Showcase;
