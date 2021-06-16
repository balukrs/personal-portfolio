import React from "react";
import Particles from "react-tsparticles";

const About = () => {
  return (
    <div className="w-screen h-screen">
      <div className="absolute z-30 w-full h-full">
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
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
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
      <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center">
        <h1 className="z-30 mt-20 text-xl text-gray-800">
          H E L L O &nbsp; I ' M
        </h1>
        <span>
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
        </span>
      </div>
    </div>
  );
};

export default About;
