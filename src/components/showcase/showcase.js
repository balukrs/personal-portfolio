import React from "react";
import Mainimage from "../../assets/homepage_image.jpg";
import Me from "../../assets/me.jpg";

const Showcase = () => {
  return (
    <div className="flex h-screen">
      <section className="w-3/4 overflow-hidden bg-red-600 h-4/5">
        <img src={Mainimage} alt="coverimg" className="w-full h-full" />
      </section>

      <section className="flex flex-col items-center content-center w-1/3 overflow-hidden bg-red-300 h-4/5">
        <div className="flex justify-center">
          <img src={Me} className="w-2/5 rounded-full" />
        </div>
        <div>
          <h3>Balu Krishna R</h3>
        </div>
        <div>
          <span>Web Developer</span>
          <span>React JS</span>
          <span>B-Tech in Applied Electronics and Instrumentation</span>
        </div>
        <div>
          <span>balukrs@balukrishna.com</span>
          <span>9567668998</span>
          <span>Linked In</span>
        </div>
        <div>
          <button>Download CV</button>
        </div>
      </section>
    </div>
  );
};

export default Showcase;
