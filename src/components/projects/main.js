import React, { useRef, useState, useLayoutEffect } from "react";
import mountain from "../../assets/parallax/mountains_new.png";
import woods from "../../assets/parallax/woods_new.png";

import { useViewportScroll, useTransform, motion } from "framer-motion";

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
  const { scrollY } = useViewportScroll();
  const [offsetTopwood, setOffsetTopwood] = useState(0);
  const woodref = useRef();
  const bgref = useRef();
  const y1 = useTransform(
    scrollY,
    [offsetTopwood + 400, offsetTopwood - 400],
    [0, 500]
  );
  const y2 = useTransform(
    scrollY,
    [offsetTopwood - 400, offsetTopwood + 400],
    [0, 20]
  );
  const y3 = useTransform(
    scrollY,
    [offsetTopwood - 500, offsetTopwood + 500],
    [0, 350]
  );

  useLayoutEffect(() => {
    if (!woodref.current) return null;
    setOffsetTopwood(woodref.current.offsetTop);
  }, [woodref]);

  return (
    <motion.div
      className="projectht"
      variants={mainVariants}
      initial="hidden"
      animate="visible"
      // style={{
      //   backgroundImage:
      //     "linear-gradient(to bottom, #ffffff, #efefef, #dfdfdf, #cfcfcf, #bfbfbf)",
      // }}
    >
      <section
        className="relative h-screen img-wrap"
        style={{
          minHeight: "auto",
        }}
      >
        <motion.h2
          className="absolute font-extrabold text-7xl font-ibm font text-gray-50 top-1/3 left-2/4"
          style={{
            transform: "translate(-50%,-33.33%)",
            y: y3,
            x: "-150px",
            zIndex: "-1",
            color: "rgb(220, 222, 224)",
            textShadow:
              " 2px 8px 6px rgba(0,0,0,0.2),0px -5px 35px rgba(255,255,255,0.3)",
          }}
        >
          Projects.
        </motion.h2>
        <motion.img
          ref={bgref}
          src={mountain}
          className="absolute object-cover w-full min-h-full white bg-g"
          style={{ zIndex: "-2", y: y2 }}
        />

        <motion.img
          ref={woodref}
          src={woods}
          className="absolute object-cover w-full min-h-full"
          style={{ zIndex: "-2", y: y1 }}
        />
      </section>
      <section
        className="h-screen mt-8 bg-gradient-to-t from-gray-100 via-gray-300 to-white"
        style={{
          zIndex: "2",
        }}
      >
        H
      </section>
      <section className="h-screen ">T</section>
    </motion.div>
  );
};

export default Projectmain;
