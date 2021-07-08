import React from "react";

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
    ></motion.div>
  );
};

export default Projectmain;
