import React from "react";
import IMG1 from "../../assets/loader/img_1.webp";
import IMG2 from "../../assets/loader/img_2.webp";
import IMG3 from "../../assets/loader/img_3.webp";
import IMG4 from "../../assets/loader/img_4.webp";
import { motion } from "framer-motion";

const testVariable = {
  hidden: {
    height: "0%",
  },
  visible: {
    height: "82%",
    transition: {
      type: "ease",
      duration: 1,
    },
  },
};

const Loader = () => {
  return (
    <>
      <motion.div
        variants={testVariable}
        initial="hidden"
        animate="visible"
        className="absolute right-0 w-1/5 mr-3 h-5/6"
        style={{
          backgroundImage: `url(${IMG1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 25%",
          boxShadow:
            "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
        }}
      ></motion.div>
      <div
        className="absolute left-0 w-1/5 ml-3 h-5/6"
        style={{
          backgroundImage: `url(${IMG2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 25%",
          boxShadow:
            "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
        }}
      ></div>
      <div
        className="absolute"
        style={{
          backgroundImage: `url(${IMG3})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 25%",
          boxShadow:
            "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
        }}
      ></div>
      <div
        className="absolute"
        style={{
          backgroundImage: `url(${IMG4})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 25%",
          boxShadow:
            "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
        }}
      ></div>
    </>
  );
};

export default Loader;
