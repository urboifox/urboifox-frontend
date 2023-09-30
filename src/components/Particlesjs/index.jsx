import { useCallback, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { primaryColor } from "../../constants";
export default function Particlesjs() {
  const options = {
    background: {
      color: {
        value: "none",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 150,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: primaryColor,
      },
      links: {
        color: "#555",
        distance: 150,
        enable: true,
        opacity: 0,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 20,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 0.1, max: 1.5 },
      },
    },
    detectRetina: true,
  };
  const options2 = {
    background: {
      color: {
        value: "none",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push",
        },
        onHover: {
          enable: false,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 150,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#fff",
      },
      links: {
        color: "#555",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 0.1, max: 1.5 },
      },
    },
    detectRetina: true,
  };

  useEffect(() => {
    const firstCanvas = document.querySelector("#tsparticles canvas");
    // const secondCanvas = document.querySelector("#tsparticles2 canvas");
    const handleMouseMove = (e) => {
      let xPosition = (e.clientX / window.innerWidth) * 2 - 1;
      let yPosition = (e.clientY / window.innerHeight) * 2 - 1;
      firstCanvas.style.left = `${xPosition * 100}px`;
      firstCanvas.style.top = `${yPosition * 100}px`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <Particles id="tsparticles" init={particlesInit} options={options} />
      <Particles id="tsparticles2" init={particlesInit} options={options2} />
    </>
  );
}
