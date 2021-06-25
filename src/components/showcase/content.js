import React from "react";
import Mainimage from "../../assets/homepage_image.webp";
import Me from "../../assets/me.webp";
import { GrLinkedin } from "react-icons/gr";
import { motion } from "framer-motion";

const testVariable = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      duration: 0.8,
      mass: 1.3,
    },
  },
};

const Content = () => {
  return (
    <>
      <motion.section
        variants={testVariable}
        initial="hidden"
        animate="visible"
        className="inline-block w-4/5 bg-fixed h-5/6 "
        style={{
          backgroundImage: `url(${Mainimage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 25%",
          boxShadow:
            "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
        }}
      ></motion.section>

      <motion.section
        variants={testVariable}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center content-center w-1/3 overflow-hidden p-7 h-5/6 "
      >
        <div className="flex justify-center">
          <img src={Me} className="w-2/5 rounded-full" />
        </div>
        <div className="mt-3">
          <h3 className="text-2xl font-bold">Balu Krishna R.</h3>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-lg font-light">Web Developer, React JS</span>
          <span className="mt-3 text-sm text-center font-extralight">
            B-Tech (Applied Electronics and Instrumentation)
          </span>
        </div>
        <div className="flex flex-col items-center justify-center mt-8">
          <span className="font-light font-amiri">balukrs@balukrishna.com</span>
          <span className="mb-2 font-light font-amiri">+91 9567668998</span>
          <a
            href="#"
            className="mb-6 transition-all transform scale-1 hover:scale-75"
          >
            <GrLinkedin size="1.5em" />
          </a>
        </div>
        <div>
          <button className="p-2 text-gray-100 transition duration-300 bg-gray-700 border-2 border-gray-700 shadow-xl hover:bg-white hover:text-gray-900">
            Download CV
          </button>
        </div>
      </motion.section>
    </>
  );
};

export default Content;
