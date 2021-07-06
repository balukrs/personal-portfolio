import React, { useRef, useState, useLayoutEffect } from "react";
import mountain from "../../assets/parallax/mountains.png";
import woods from "../../assets/parallax/woods.png";

import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion,
} from "framer-motion";

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
      // style={{
      //   backgroundImage:
      //     "linear-gradient(to bottom, #ffffff, #efefef, #dfdfdf, #cfcfcf, #bfbfbf)",
      // }}
    >
      <section
        className="relative h-screen"
        style={{
          minHeight: "auto",
        }}
      >
        <motion.h2
          className="absolute text-6xl font-ibm font text-gray-50 top-1/3 left-2/4"
          style={{
            transform: "translate(-50%,-33.33%)",
            y: y3,
            x: "-100px",
            zIndex: "-1",
          }}
        >
          Projects.
        </motion.h2>
        <motion.img
          ref={bgref}
          src={mountain}
          className="absolute object-cover w-full min-h-full"
          style={{ zIndex: "-2", y: y2 }}
        />
        <motion.img
          ref={woodref}
          src={woods}
          className="absolute object-cover w-full min-h-full"
          style={{ zIndex: "-2", y: y1 }}
        />
      </section>
      <section className="h-screen bg-gray-700" style={{ zIndex: "2" }}>
        H
      </section>
      <section className="h-screen ">T</section>
    </motion.div>
  );
};

export default Projectmain;
