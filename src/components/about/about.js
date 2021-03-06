import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

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
  hide: {
    y: 40,
    opacity: 0,
  },
  vise: {
    y: 0,
    opacity: 1,

    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
  abouthide: {
    scale: 0,
  },
  aboutvisible: {
    scale: 1.2,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
  scaledown: {
    scale: 0.7,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const bgVariants = {
  hidden: {
    scale: 1,
    rotation: 0.02,
  },
  ball1: {
    scale: 8,
    rotation: 0.02,
    transition: {
      repeat: Infinity,
      type: "ease",
      duration: 2.5,
      repeatType: "reverse",
    },
  },
  ball2: {
    scale: 16,
    rotation: 0.02,
    transition: {
      repeat: Infinity,
      type: "ease",
      delay: 1,
      duration: 2.5,
      repeatType: "reverse",
    },
  },
  ball3: {
    scale: 32,
    rotation: 0.02,
    transition: {
      repeat: Infinity,
      type: "ease",
      duration: 2.5,
      delay: 1.5,
      repeatType: "reverse",
    },
  },
  ball4: {
    scale: 64,
    rotation: 0.02,
    transition: {
      repeat: Infinity,
      type: "ease",
      duration: 2.5,
      delay: 2,
      repeatType: "reverse",
    },
  },
};

const About = () => {
  const [animate1, setAnimate1] = useState("");
  const [animate2, setAnimate2] = useState("");
  const [animate3, setAnimate3] = useState("");
  const [messg, setMessg] = useState("H E L L O... I`M ");
  const h1control = useAnimation();
  const namecontrol = useAnimation();
  const controls = useAnimation();

  const subRoutine = async () => {
    await h1control.start("vise");
    await namecontrol.start("vise");
    await (() => {
      controls.start("aboutvisible");
      h1control.start("scaledown");
      namecontrol.start("scaledown");
    })();
    setTimeout(function () {
      setAnimate1("about-animate");
      setMessg("THANK YOU...");
    }, 1000);
    setTimeout(function () {
      setAnimate2("about-animate");
    }, 2000);
    setTimeout(function () {
      setAnimate3("about-animate");
      setMessg("H E L L O... I`M ");
    }, 3000);
  };

  return (
    <motion.div
      className="relative flex flex-col w-screen h-screen"
      variants={contVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onAnimationComplete={() => subRoutine()}
    >
      <div className="w-full h-full">
        <motion.div
          className="absolute w-8 h-8 bg-gray-400 rounded-full -left-3 bottom-12 opacity-90"
          variants={bgVariants}
          initial="hidden"
          animate="ball1"
          style={{ zIndex: -1 }}
        ></motion.div>
        <motion.div
          className="absolute w-8 h-8 bg-gray-300 rounded-full -left-3 bottom-12"
          variants={bgVariants}
          initial="hidden"
          animate="ball2"
          style={{ zIndex: -2 }}
        ></motion.div>
        <motion.div
          className="absolute w-8 h-8 bg-gray-200 rounded-full -left-3 bottom-12"
          variants={bgVariants}
          initial="hidden"
          animate="ball3"
          style={{ zIndex: -3 }}
        ></motion.div>
        <motion.div
          className="absolute w-8 h-8 bg-gray-100 rounded-full -left-3 bottom-12"
          variants={bgVariants}
          initial="hidden"
          animate="ball4"
          style={{ zIndex: -4 }}
        ></motion.div>
      </div>
      <div className="absolute left-20 md:opacity-50 md:left-0">
        <div className="flex flex-col">
          <div>
            <motion.h1
              className="z-30 mt-20 text-6xl text-gray-800"
              variants={contVariants}
              initial="hide"
              animate={h1control}
              style={{ transition: "all ease" }}
            >
              {messg}
            </motion.h1>
          </div>
          <div>
            <motion.div
              className="flex flex-col justify-center "
              variants={contVariants}
              initial="hide"
              animate={namecontrol}
              layout
            >
              <div className="flex">
                <h1 className={`letter__special ${animate1}`}>B</h1>
                <h1 className="letter__special">A</h1>
                <h1 className="letter__special">L</h1>
                <h1 className="letter__special">U</h1>
                <h1 className="letter__special">&nbsp;</h1>
              </div>
              <div className="flex">
                <h1 className={`letter__special ${animate2}`}>K</h1>
                <h1 className="letter__special">R</h1>
                <h1 className="letter__special">I</h1>
                <h1 className="letter__special">S</h1>
                <h1 className="letter__special">H</h1>
                <h1 className="letter__special">N</h1>
                <h1 className="letter__special">A</h1>
                <h1 className={`letter__special ${animate3}`}>.</h1>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        className="absolute z-10 w-1/3 h-auto p-2 m-auto text-lg bg-white border border-green-300 rounded bg-opacity-80 top-20 right-20 handwritting-font blur-2xl md:left-0 md:right-0 md:p-10 md:w-8/12 md:bg-opacity-90 md:text-base"
        variants={contVariants}
        initial="abouthide"
        animate={controls}
      >
        <p className="text-xl ">
          " I am a web developer with one plus years of experience seeking an
          opportunity to usemy web development skills and knowledge. I love
          learning new tools and, in the process,I developed coding skills for
          building dynamic web applications and websites."
        </p>
        <p className="font-bold ">
          {" "}
          Thank you for visiting my portfolio website.{" "}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
