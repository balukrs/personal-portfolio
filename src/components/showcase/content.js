import React, { useEffect, useState, useContext } from "react";
import homeimage from "../../assets/loader/img_4.webp";
import aboutimage from "../../assets/loader/img_1.webp";
import projectimage from "../../assets/loader/img_2.webp";
import contactimage from "../../assets/loader/img_3.webp";
import Me from "../../assets/me.webp";
import { GrLinkedin } from "react-icons/gr";
import { motion } from "framer-motion";
import { Context } from "../../context";

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
  const [state, dispatch] = useContext(Context);
  const [defimg, setDefimg] = useState(homeimage);

  useEffect(() => {
    switch (state.hoverloc) {
      case "/about":
        setDefimg(aboutimage);
        break;
      case "/projects":
        setDefimg(projectimage);
        break;
      case "/contact":
        setDefimg(contactimage);
        break;
      default:
        setDefimg(homeimage);
        break;
    }
  }, [state]);

  return (
    <>
      <motion.section
        variants={testVariable}
        initial="hidden"
        animate="visible"
        className="inline-block w-9/12 mt-2 bg-fixed rounded-r-lg h-5/6 animate-mymove"
        style={{
          backgroundImage: `url(${defimg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0% 10%",
          transition: "background linear 0.5s",
          boxShadow: "0 1px 2px 0 black",
        }}
      ></motion.section>

      <motion.section
        variants={testVariable}
        initial="hidden"
        animate="visible"
        className="w-1/3 mt-2 ml-2 mr-2 overflow-hidden p-7 h-5/6 frostedcont"
      >
        <div className="flex flex-col items-center content-center ">
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
            <span className="font-light font-amiri">
              balukrs@balukrishna.com
            </span>
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
        </div>
      </motion.section>
    </>
  );
};

export default Content;