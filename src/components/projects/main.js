import React, { useEffect, useState } from "react";
import build from "../../assets/parallax/building.png";
import dune from "../../assets/parallax/dune.png";

import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion,
} from "framer-motion";

const Projectmain = () => {
  const { scrollY } = useViewportScroll();

  console.log(scrollY);

  const y1 = useTransform(scrollY, [0, 300], [0, 300]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <motion.div
      className="projectht"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #ffffff, #efefef, #dfdfdf, #cfcfcf, #bfbfbf)",
      }}
    >
      <section className="h-screen ">
        <div className="relative">
          <motion.div className="m-auto" style={{ y: y1 }}>
            <h1>PROJECTS</h1>
          </motion.div>
          <motion.div className="m-auto" style={{ y: y2 }}>
            <h1>C'MON</h1>
          </motion.div>
        </div>
      </section>
      <section className="h-screen ">H</section>
      <section className="h-screen ">T</section>
    </motion.div>
  );
};

export default Projectmain;
