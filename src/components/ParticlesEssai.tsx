import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      style={{
        position: "fixed",
        top: 0, left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,  // derrière tout le contenu
      }}
      options={{
        background: { color: { value: "#0a1f1e" } },
        particles: {
          number: { value: 60 },
          color: { value: ["#3a9e97", "#e8c27a", "#226D68"] },  // tes couleurs teal
          size: { value: { min: 1, max: 4 } },
          opacity: { value: { min: 0.3, max: 0.8 } },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: true,
          },
          links: {
            enable: true,           // lignes entre les particules
            color: "#3a9e97",
            opacity: 0.2,
            distance: 150,
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;