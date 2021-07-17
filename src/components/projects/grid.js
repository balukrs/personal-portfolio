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
  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p>
        {isReadMore ? text.slice(0, 210) : text}
        <span onClick={toggleReadMore} className="text-gray-300 cursor-pointer">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };

  const Btnnav = ({ stats }) => {
    return (
      <>
        <div
          className="flex items-center justify-around w-full h-12 bg-gray-400 bg-opacity-30"
          style={{
            borderRadius: "0 0 5px 5px",
          }}
        >
          <a className="flex items-center justify-center cursor-pointer hover:text-red-500">
            <AiFillGithub size="2em" />
            <p className="text-sm ">Code</p>
          </a>
          {stats == true ? (
            <a className="flex items-center justify-center cursor-pointer hover:text-red-500">
              <AiFillGithub size="2em" />
              <p className="text-sm ">Server</p>
            </a>
          ) : null}
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
    if (layoutpos > mainheadref.current.offsetTop - 550) {
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
            <h3 className="text-xl font-bold ">To Do App</h3>
            <div className="relative flex mb-1">
              <img src={firebase_logo} className="object-cover w-5/12" />
              <img src={sass_logo} className="object-cover w-5/12" />
            </div>
            <ReadMore>
              A simple react JS application to keep track of your activities.
              Firebase is implemented for authentication purpose and for storing
              data making use of its Realtime Database.Custom hooks are used to
              interact with firebase database. The components are styled using
              SASS and Material-UI. Dark mode is also added.
            </ReadMore>
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
          <div className="h-auto details">
            <h3 className="text-xl font-bold">Streamer App</h3>
            <div className="relative flex mb-1">
              <img src={node_logo} className="object-cover w-5/12" />
              <img src={mongo_logo} className="object-cover w-5/12" />
            </div>
            <ReadMore>
              A simple react JS application that portrays the functions of a
              streaming app where you can edit,delete and create streams. The
              elements are styled using Tailwind CSS and Material-UI. Redux is
              implemented for state management. The server is created using
              express JS and mongoose is used for object mapping between the
              server and mongoDB Atlas database.
            </ReadMore>
          </div>
          <Btnnav stats={true} />
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
            <ReadMore>
              A simple facebook clone where users can create account to post
              status and photos. Redux is used for state management and
              Material-UI designs are used. Authentication is done by JWT stored
              inside an httpOnly cookie. express JS server is used and mongoDB
              cloud Atlas database is connected using mongoose. bcrypt is used
              to hash the passwords stored in database.
            </ReadMore>
          </div>
          <Btnnav stats={true} />
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
            <ReadMore>
              A chat application created with express JS and Socket IO. Users
              can enter the chat room with an unique username thus enabling
              realtime, bi-directional communication between web clients and
              servers. A new browser window needs to be open to establish a
              connection and add a new user. The user can leave or disconnect
              from the chat room by closing the browser window.
            </ReadMore>
          </div>
          <Btnnav stats={true} />
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
            <ReadMore>
              A react app customized using Tailwind CSS for keeping track of
              daily exercise activities. Backend of the application is created
              with express JS and mongoDB atlas is used as database for storing
              user and activity details. Users can create,edit and delete their
              exercise logs.
            </ReadMore>
          </div>
          <Btnnav stats={true} />
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
            <ReadMore>
              React is used to create my personal portfolio website. Styled with
              Tailwind CSS and framer motion library is used for creating
              animations. React Context is used for managing state.The website
              includes many of my personal projects that i did to learn react.
            </ReadMore>
          </div>
          <Btnnav />
        </div>
      </motion.div>
    </>
  );
};

export default Grid;
