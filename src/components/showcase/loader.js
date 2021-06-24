import React, { useState, useEffect } from "react";
import IMG1 from "../../assets/loader/img_1.webp";
import IMG3 from "../../assets/loader/img_3.webp";
import IMG4 from "../../assets/loader/img_4.webp";
import IMG2 from "../../assets/loader/img_2.webp";
import IMG1_COLOR from "../../assets/loader/img_1_color.webp";
import IMG3_COLOR from "../../assets/loader/img_3_color.webp";
import IMG4_COLOR from "../../assets/loader/img_4_color.webp";
import IMG2_COLOR from "../../assets/loader/img_2_color.webp";
import { motion, useAnimation } from "framer-motion";

const testVariable = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
  change: {
    opacity: [0, 1, 0, 1, 0, 1],
    transition: {
      duration: 0.3,
    },
  },
  imgupanimate: {
    y: -400,
    transition: {
      type: "tween",
      duration: 0.8,
    },
  },
  imgdownanimate: {
    y: 400,
    transition: {
      type: "tween",
      duration: 0.8,
    },
  },
  messagehidden: {
    x: -300,
    opacity: 0,
  },
  messagevisible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 5,
      delay: 0.5,
    },
  },
  exitup: {
    y: "-100vh",
    transition: {
      type: "tween",
      duration: 0.8,
    },
  },
  exitdown: {
    y: "100vh",
    transition: {
      type: "tween",
      duration: 0.8,
    },
  },
};

const Loader = ({ trigger }) => {
  const [img1, setImg1] = useState(IMG1_COLOR);
  const [img2, setImg2] = useState(IMG2_COLOR);
  const [img3, setImg3] = useState(IMG3_COLOR);
  const [img4, setImg4] = useState(IMG4_COLOR);

  const img_1Control = useAnimation();
  const img_2Control = useAnimation();
  const img_3Control = useAnimation();
  const img_4Control = useAnimation();
  const messageControl = useAnimation();

  const sequence = async () => {
    await img_1Control.start("visible");
    await img_4Control.start("visible");
    await img_2Control.start("visible");
    await img_3Control.start("visible");
    await img_1Control.start("change");
    await setImg1(IMG1);
    await img_4Control.start("change");
    await setImg4(IMG4);
    await img_2Control.start("change");
    await setImg2(IMG2);
    await img_3Control.start("change");
    await setImg3(IMG3);
    await (() => {
      img_1Control.start("imgupanimate");
      img_2Control.start("imgdownanimate");
      img_3Control.start("imgupanimate");
      img_4Control.start("imgdownanimate");
    })();
    await messageControl.start("messagevisible");
    trigger(false);
  };

  useEffect(() => {
    sequence();
  }, []);

  return (
    <>
      <div className="relative flex justify-center w-full h-full ml-4">
        <motion.div
          variants={testVariable}
          initial="hidden"
          animate={img_1Control}
          exit="exitup"
          className="w-1/3 mr-2 h-4/5"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center 25%",
            boxShadow:
              "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
          }}
        ></motion.div>
        <motion.div
          variants={testVariable}
          initial="hidden"
          animate={img_2Control}
          exit="exitdown"
          className="w-1/3 mr-2 h-4/5"
          style={{
            backgroundImage: `url(${img2})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center 25%",
            boxShadow:
              "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
          }}
        ></motion.div>
        <motion.div
          variants={testVariable}
          initial="hidden"
          animate={img_3Control}
          exit="exitup"
          className="w-1/3 mr-2 h-4/5"
          style={{
            backgroundImage: `url(${img3})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center 25%",
            boxShadow:
              "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
          }}
        ></motion.div>
        <motion.div
          variants={testVariable}
          initial="hidden"
          animate={img_4Control}
          exit="exitdown"
          className="w-1/3 h-4/5"
          style={{
            backgroundImage: `url(${img4})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center 25%",
            boxShadow:
              "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
          }}
        ></motion.div>
        <motion.div
          className="absolute text-6xl top-64"
          variants={testVariable}
          initial="messagehidden"
          animate={messageControl}
          exit="messagehidden"
        >
          <h1>Welcome to my portfolio website. </h1>
        </motion.div>
      </div>
    </>
  );
};

export default Loader;
