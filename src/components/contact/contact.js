import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import emailjs from "emailjs-com";

const mainVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
  feedhidden: {
    opacity: 0,
    y: 10,
  },
  feedvisible: {
    opacity: 1,
    y: 0,
    scale: 1.2,
    transition: {
      type: "spring",
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const Contact = () => {
  const feedanime = useAnimation();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3jermtm",
        "template_axm3cva",
        e.target,
        "user_Fw0z1pnpVYHxBeAqdonyY"
      )
      .then(
        (result) => {
          feedanime.start("feedvisible");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <motion.div
      className="flex justify-center w-full mt-10 md:items-center md:flex-col"
      variants={mainVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <section className="w-4/12 p-4 text-white bg-gray-800 md:w-9/12 md:-mt-6 ">
        <div>
          <h2 className="mb-2 text-3xl font-bold text-green-300">
            Get in touch
          </h2>
          <div className="p-2 mb-2 border border-green-300">
            <p>Surabhi,HSRA C31</p>
            <p>Kulathara,Karamana PO</p>
            <p>Thiruvananthapuram 695002</p>
          </div>
        </div>
        <div className="flex items-center mt-4 mb-4">
          <AiFillPhone size="1.5em" />
          <span className="ml-3 ">+91-9567668998</span>
        </div>
        <div className="flex items-center">
          <AiFillMail size="1.5em" />
          <span className="ml-3 ">balukrs90@gmail.com</span>
        </div>
      </section>
      <section className="w-4/12 p-2 ml-2 overflow-hidden border-8 md:w-9/12 md:-ml-0 md:mt-2">
        <h1 className="text-3xl ">Enter Details</h1>
        <form className="p-2 text-gray-500" onSubmit={sendEmail}>
          <div className="mb-2">
            <label>Full Name</label>
            <input
              className="block w-full p-1 border border-gray-300 focus:outline-none"
              name="name"
              required
            />
          </div>
          <div className="mb-2 ">
            <label>Email</label>
            <input
              className="block w-full p-1 border border-gray-300 focus:outline-none"
              name="email"
              required
            />
          </div>

          <div className="mb-2 ">
            <label>Phone No</label>
            <input
              className="block w-full p-1 border border-gray-300 focus:outline-none"
              name="phone"
            />
          </div>

          <div>
            <label>Message</label>
            <textarea
              className="block w-full border border-gray-300 resize-none focus:outline-none"
              rows="4"
              cols="45"
              name="message"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="p-2 mt-3 transition-all bg-gray-800 border-2 border-gray-800 rounded-sm text-gray-50 hover:bg-white hover:text-gray-700"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
      <motion.section
        className="absolute -bottom-20"
        variants={mainVariants}
        initial="feedhidden"
        animate={feedanime}
      >
        <span className="text-2xl ">Thank you for reaching out to me....</span>
      </motion.section>
    </motion.div>
  );
};

export default Contact;
