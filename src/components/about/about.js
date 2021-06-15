import React, { useEffect, useRef } from "react";

const About = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    const mouse = {
      x: undefined,
      y: undefined,
      radius: (canvas.height / 120) * (canvas.width / 120),
    };

    canvas.addEventListener("mousemove", (e) => {
      var bounds = canvas.getBoundingClientRect();

      mouse.x = e.pageX - bounds.left - window.scrollX;
      mouse.y = e.pageY - bounds.top - window.scrollY;

      mouse.x /= bounds.width;
      mouse.y /= bounds.height;

      mouse.x *= canvas.width;
      mouse.y *= canvas.height;
    });

    class Particle {
      constructor() {
        // this.x = mouse.x;
        // this.y = mouse.y;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 10 + 1;
        this.speedX = Math.random() * 5 - 1.5;
        this.speedY = Math.random() * 5 - 1.5;
      }
      update() {
        if (
          this.x + this.speedX > canvas.width - this.size ||
          this.x + this.speedX < this.size
        ) {
          this.speedX = -this.speedX;
        }
        if (
          this.y + this.speedY > canvas.height - this.size ||
          this.y + this.speedY < this.size
        ) {
          this.speedY = -this.speedY;
        }

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius + this.size) {
          if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
            this.x += 10;
          }
          if (mouse.x > this.x && this.x > this.size * 10) {
            this.x -= 10;
          }
          if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
            this.y += 10;
          }
          if (mouse.y > this.y && this.y > this.size * 10) {
            this.y -= 10;
          }
          this.x += this.speedX;
          this.y += this.speedY;
        }

        this.x += this.speedX;
        this.y += this.speedY;
      }
      draw() {
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.shadowBlur = 5;
        ctx.shadowColor = "black";
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particleCreator = () => {
      for (let i = 0; i <= 120; i++) {
        particles.push(new Particle());
      }
    };
    particleCreator();

    const particleHandler = () => {
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.lineWidth = 0.3;
            ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particleHandler();
      requestAnimationFrame(animate);
    };

    animate();
  }, [canvasRef]);

  return (
    <div className="relative height_1">
      <canvas className="absolute z-30 w-full h-full" ref={canvasRef}></canvas>
      <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center">
        <h1 className="mt-10 text-xl text-gray-800">H E L L O &nbsp; I ' M</h1>
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
