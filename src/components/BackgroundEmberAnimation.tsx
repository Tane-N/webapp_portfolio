import React, { useEffect, useRef } from "react";

const BackgroundEmberAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: Particle[] = [];
    const particleCount = 50;
    let canvasWidth = window.innerWidth;
    let canvasHeight = window.innerHeight;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    class Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
      opacity: number;
      fadeRate: number;

      constructor() {
        this.x = Math.random() * canvasWidth;
        this.y = canvasHeight + Math.random() * 50;
        this.radius = Math.random() * 3 + 1;
        this.color = `rgba(255, ${Math.random() * 100 + 50}, 0, 1)`;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = -(Math.random() * 3 + 1);
        this.opacity = Math.random() * 0.7 + 0.3;
        this.fadeRate = Math.random() * 0.01 + 0.005;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= this.fadeRate;

        if (this.y < 0 || this.opacity <= 0) {
          this.reset();
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color.replace("1)", `${this.opacity})`);
        ctx.fill();
        ctx.closePath();

        ctx.restore();
      }

      reset() {
        this.x = Math.random() * canvasWidth;
        this.y = canvasHeight + Math.random() * 50;
        this.radius = Math.random() * 3 + 1;
        this.color = `rgba(255, ${Math.random() * 100 + 50}, 0, 1)`;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = -(Math.random() * 3 + 1);
        this.opacity = Math.random() * 0.7 + 0.3;
        this.fadeRate = Math.random() * 0.01 + 0.005;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvasWidth = window.innerWidth;
      canvasHeight = window.innerHeight;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      particles.forEach((particle) => particle.reset());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -10,
      }}
    />
  );
};

export default BackgroundEmberAnimation;
