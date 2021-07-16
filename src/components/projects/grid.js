import React, { useLayoutEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { RiPagesLine } from "react-icons/ri";

import todo_face from "../../assets/projects/todo_app/front.webp";
import streamer_face from "../../assets/projects/streamer_app/front.webp";
import social_face from "../../assets/projects/social_app/front.webp";
import chat_face from "../../assets/projects/chat_app/front.webp";
import exercise_face from "../../assets/projects/exercise_app/front.webp";
import portfolio_face from "../../assets/projects/portfolio_app/front.webp";

import firebase_logo from "../../assets/logos/firebase.png";
import mongo_logo from "../../assets/logos/mongo.png";
import sass_logo from "../../assets/logos/sass.png";
import node_logo from "../../assets/logos/node.png";
import socket_logo from "../../assets/logos/socketio.png";
import framer_logo from "../../assets/logos/framer.png";

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
      transition: {
        type: "tween",
      },
    },
  };

  const Btnnav = () => {
    return (
      <>
        <div
          className="absolute bottom-0 left-0 right-0 flex items-center justify-around w-full h-12 bg-gray-400 bg-opacity-30"
          style={{
            borderRadius: "0 0 5px 5px",
          }}
        >
          <a className="cursor-pointer hover:text-red-500">
            <AiFillGithub size="2em" />
          </a>
          <a className="cursor-pointer hover:text-red-500">
            <RiPagesLine size="2em" />
          </a>
        </div>
      </>
    );
  };

  const animeOrch1 = async () => {
    await mainheadanime.start("headvisible");
    await maingridanime.start("gridvisible");
  };

  useLayoutEffect(() => {
    if (layoutpos > mainheadref.current.offsetTop - 450) {
      animeOrch1();
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
        className="mb-10 cards"
        ref={maingridref}
        variants={mainVariants}
        initial="gridhidden"
        animate={maingridanime}
      >
        <div className="relative card">
          <div className="img_container">
            <img
              src={todo_face}
              style={{
                borderRadius: "5px 5px 0 0",
              }}
            />
          </div>
          <div className=" details">
            <h3 className="text-xl font-bold">To Do App</h3>
            <div className="relative flex mb-1">
              <img src={firebase_logo} className="object-cover w-5/12" />
              <img src={sass_logo} className="object-cover w-5/12" />
            </div>
            <p className="mb-10">
              A simple react JS application to keep track of your activities.
              <span className="font-bold "> Firebase</span> is implemented for
              authentication purpose and for storing data making use of its
              <span className="font-bold "> Realtime Database</span>. The
              components are styled using{" "}
              <span className="font-bold "> SASS</span> and Material-UI. Dark
              mode is also added.
            </p>
          </div>
          <Btnnav />
        </div>
        <div className="relative card">
          <div className="img_container">
            <img
              src={streamer_face}
              style={{
                borderRadius: "5px 5px 0 0",
              }}
            />
          </div>
          <div
            className="overflow-hidden  details"
            style={{
              maxHeight: "300px",
            }}
          >
            <h3 className="text-xl font-bold">Streamer App</h3>
            <div className="relative flex mb-1">
              <img src={node_logo} className="object-cover w-5/12" />
              <img src={mongo_logo} className="object-cover w-5/12" />
            </div>
            <p className="mb-10">
              A simple react JS application that portrays the functions of a
              streaming app where you can edit,delete and create streams. The
              elements are styled using Tailwind CSS and Material-UI. Redux is
              implemented for state management. The server is created using
              express JS and mongoose is used for object mapping between the
              server and mongoDB Atlas database.
            </p>
          </div>
          <Btnnav />
        </div>
        <div className="relative card">
          <div className="img_container">
            <img
              src={social_face}
              style={{
                borderRadius: "5px 5px 0 0",
              }}
            />
          </div>
          <div className=" details">
            <h3 className="text-xl font-bold">Social Media App</h3>
            <div className="relative flex mb-1">
              <img src={node_logo} className="object-cover w-5/12" />
              <img src={mongo_logo} className="object-cover w-5/12" />
            </div>
            <p className="mb-10">
              arGraph is a generic parallel graph library. It is comparable with
              Boost Graph Library (BGL). Like the BGL it uses C++ templates and
              the visitor concept to generically implement graph algorithms.
            </p>
          </div>
          <Btnnav />
        </div>
        <div className="relative card">
          <div className="img_container">
            <img
              src={chat_face}
              style={{
                borderRadius: "5px 5px 0 0",
              }}
            />
          </div>
          <div className=" details">
            <h3 className="text-xl font-bold">Chat App</h3>
            <div className="relative flex mb-1">
              <img src={node_logo} className="object-cover w-5/12" />
              <img src={socket_logo} className="object-cover w-5/12" />
            </div>
            <p className="mb-10">
              arGraph is a generic parallel graph library. It is comparable with
              Boost Graph Library (BGL). Like the BGL it uses C++ templates and
              the visitor concept to generically implement graph algorithms.
            </p>
          </div>
          <Btnnav />
        </div>
        <div className="relative card">
          <div className="img_container">
            <img
              src={exercise_face}
              style={{
                borderRadius: "5px 5px 0 0",
              }}
            />
          </div>
          <div className=" details">
            <h3 className="text-xl font-bold">Exercise Tracker App</h3>
            <div className="relative flex mb-1">
              <img src={node_logo} className="object-cover w-5/12" />
              <img src={mongo_logo} className="object-cover w-5/12" />
            </div>
            <p className="mb-10">
              arGraph is a generic parallel graph library. It is comparable with
              Boost Graph Library (BGL). Like the BGL it uses C++ templates and
              the visitor concept to generically implement graph algorithms.
            </p>
          </div>
          <Btnnav />
        </div>
        <div className="relative card">
          <div className="img_container">
            <img
              src={portfolio_face}
              style={{
                borderRadius: "5px 5px 0 0",
              }}
            />
          </div>
          <div className=" details">
            <h3 className="text-xl font-bold">Personal Portfolio</h3>
            <div className="relative flex mb-1">
              <img src={framer_logo} className="object-cover w-5/12" />
            </div>
            <p className="mb-10">
              arGraph is a generic parallel graph library. It is comparable with
              Boost Graph Library (BGL). Like the BGL it uses C++ templates and
              the visitor concept to generically implement graph algorithms.
            </p>
          </div>
          <Btnnav />
        </div>
      </motion.div>
    </>
  );
};

export default Grid;
