import React from "react";
import Particles from "react-tsparticles";
import { motion } from "framer-motion";

const contVariants = {
  hidden: {
    opacity: 0,
    x: 400,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      when: "beforeChildren",
      delay: 0.2,
    },
  },
};

const headVariants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 150,
    },
  },
};

const About = () => {
  return (
    <motion.div
      className="w-screen h-screen"
      variants={contVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute z-20 w-full h-full">
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
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
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
                type: "square",
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
      <motion.div
        variants={headVariants}
        className="flex flex-col items-center"
      >
        <h1 className="z-30 mt-20 text-xl text-gray-800">
          H E L L O &nbsp; I ' M
        </h1>
        <div>
          <div className="flex items-center">
            <h1 className="letter__special">B</h1>
            <h1 className="letter__special">A</h1>
            <h1 className="letter__special">L</h1>
            <h1 className="letter__special">U</h1>
            <h1 className="letter__special">&nbsp;</h1>
            <h1 className="letter__special">K</h1>
            <h1 className="letter__special">R</h1>
            <h1 className="letter__special">I</h1>
            <h1 className="letter__special">S</h1>
            <h1 className="letter__special">H</h1>
            <h1 className="letter__special">N</h1>
            <h1 className="letter__special">A</h1>
            <h1 className="letter__special">.</h1>
          </div>
        </div>
      </motion.div>
      <motion.div className="absolute left-0 right-0 z-20 w-3/6 p-2 m-auto text-lg bg-gray-200 border rounded bg-opacity-80 handwritting-font">
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
