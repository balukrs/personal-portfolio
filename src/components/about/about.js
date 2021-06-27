import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
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
      onAnimationComplete={() => subRoutine()}
    >
      <div className="w-full h-full">
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "#ffffff",
              },
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#000000",
              },
              links: {
                color: "#000000",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 60,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
      </div>
      <div className="absolute left-20 ">
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
              {/* H E L L O &nbsp; I ' M */}
            </motion.h1>
          </div>
          <div>
            <motion.div
              className="flex flex-col justify-center"
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
        className="absolute z-10 w-1/3 h-auto p-2 text-lg border rounded top-20 right-20 bg-opacity-80 handwritting-font"
        variants={contVariants}
        initial="abouthide"
        animate={controls}
        style={{
          background: "rgba( 255, 255, 255, 0.5 )",
          boxShadow: "0 1px 2px 0 black",
          backdropFilter: "blur( 4.5px )",
          borderRadius: "10px",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
        }}
      >
        <p>
          " By default, Motion will create an appropriate animation for a snappy
          transition based on the types of value being animated. For instance,
          physical properties like x or scale will be animated via a spring
          simulation. Whereas values like opacity or color will be animated with
          a tween. When a component mounts, it'll automatically animate to the
          values in animate if they're different from those defined in style or
          initial. You can set the initial prop to false to use the value in
          animate as the component's mounted state to disable mount animations.
          "
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
