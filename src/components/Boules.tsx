import { useState, useEffect } from "react";
import { boules } from "../data/boules";

const initialPositions = boules.map(boule => ({
  ...boule,
  x: Math.random() * window.innerWidth,  
  y: Math.random() * window.innerHeight,
  vx: (Math.random() - 0.5) * 2,         
  vy: (Math.random() - 0.5) * 2,          
}));

const Interact = () => {
  const [positions, setPositions] = useState(initialPositions);

  useEffect(() => {
    const animate = () => {
      setPositions(prev => prev.map(boule => {
        let newX = boule.x + boule.vx;
        let newY = boule.y + boule.vy;
        let newVx = boule.vx;
        let newVy = boule.vy;

   
        if (newX <= 0 || newX >= window.innerWidth - 80)  newVx = -newVx;
        if (newY <= 0 || newY >= window.innerHeight - 80) newVy = -newVy;

        return { ...boule, x: newX, y: newY, vx: newVx, vy: newVy };
      }));
    };

    const interval = setInterval(animate, 16);
    return () => clearInterval(interval);       
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", pointerEvents: "none", zIndex: 0 }}>
      {positions.map(boule => (
        <div
          key={boule.id}
          style={{
            position: "absolute",
            left: boule.x,
            top: boule.y,
            width: "80px",
            height: "80px",
            border: "2px solid",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "45px",
            backgroundColor: boule.color,
            boxShadow: `0px 0px 15px 3px ${boule.color}`,
            transition: "left 0.016s linear, top 0.016s linear", // mouvement fluide
          }}
        >
          <span style={{ color: "black", textAlign: "center", fontSize: "12px" }}>
            {boule.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Interact;