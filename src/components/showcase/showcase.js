import React, { useState, useContext, useEffect } from "react";
import Content from "./content";
import Loader from "./loader";
import { motion, AnimatePresence } from "framer-motion";
import { Context } from "../../context";

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
  // eslint-disable-next-line
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    if (final === true) {
      dispatch({ type: "UPDATE_TRIGGER", payload: true });
    }
    // eslint-disable-next-line
  }, [final]);

  return (
    <motion.div
      className="flex justify-center w-screen h-screen overflow-y-hidden "
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
