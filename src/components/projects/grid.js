import React, { useLayoutEffect, useRef } from "react";
import testimg from "../../assets/test.webp";
import { motion, useAnimation } from "framer-motion";

const Grid = ({ layoutpos }) => {
  const mainheadref = useRef();
  const maingridref = useRef();

  const mainheadanime = useAnimation();
  const maingridanime = useAnimation();

  const mainVariants = {
    gridhidden: {
      opacity: 0,
      y: -100,
    },
    gridvisible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
      },
    },
    headhidden: {
      x: "100vw",
    },
    headvisible: {
      x: 0,
      type: {
        transition: "spring",
      },
    },
  };

  useLayoutEffect(() => {
    if (layoutpos > mainheadref.current.offsetTop - 450) {
      mainheadanime.start("headvisible");
    }
    if (layoutpos > maingridref.current.offsetTop - 350) {
      maingridanime.start("gridvisible");
    }
  }, [layoutpos]);

  return (
    <>
      <motion.h1
        className="inline-block p-2 ml-6 text-4xl border-4 border-black"
        ref={mainheadref}
        variants={mainVariants}
        initial="headhidden"
        animate={mainheadanime}
      >
        React JS Projects
      </motion.h1>
      <motion.div
        className="cards"
        ref={maingridref}
        variants={mainVariants}
        initial="gridhidden"
        animate={maingridanime}
      >
        <div className="card">
          <div className="img_container">
            <img
              src={testimg}
              style={{
                borderRadius: "20px 20px 0 0",
              }}
            />
          </div>
          <div className="details">
            <h3>Heading 2</h3>
            <p>
              arGraph is a generic parallel graph library. It is comparable with
              Boost Graph Library (BGL). Like the BGL it uses C++ templates and
              the visitor concept to generically implement graph algorithms.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="img_container">
            <img
              src={testimg}
              style={{
                borderRadius: "20px 20px 0 0",
              }}
            />
          </div>
          <div className="details">
            <h3>Heading 2</h3>
            <p>
              arGraph is a generic parallel graph library. It is comparable with
              Boost Graph Library (BGL). Like the BGL it uses C++ templates and
              the visitor concept to generically implement graph algorithms.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="img_container">
            <img
              src={testimg}
              style={{
                borderRadius: "20px 20px 0 0",
              }}
            />
          </div>
          <div className="details">
            <h3>Heading 3</h3>
            <p>
              arGraph is a generic parallel graph library. It is comparable with
              Boost Graph Library (BGL). Like the BGL it uses C++ templates and
              the visitor concept to generically implement graph algorithms.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="img_container">
            <img
              src={testimg}
              style={{
                borderRadius: "20px 20px 0 0",
              }}
            />
          </div>
          <div className="details">
            <h3>Heading 4</h3>
            <p>
              arGraph is a generic parallel graph library. It is comparable with
              Boost Graph Library (BGL). Like the BGL it uses C++ templates and
              the visitor concept to generically implement graph algorithms.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Grid;
