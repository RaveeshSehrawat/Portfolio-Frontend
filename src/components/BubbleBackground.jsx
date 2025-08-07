import { useEffect, useState } from "react";

export const BubbleBackground = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    generateBubbles();

    const handleResize = () => {
      generateBubbles();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateBubbles = () => {
    const numberOfBubbles = Math.floor(
      (window.innerWidth * window.innerHeight) / 15000
    );

    const newBubbles = [];

    for (let i = 0; i < numberOfBubbles; i++) {
      newBubbles.push({
        id: i,
        size: Math.random() * 30 + 10, // Bigger bubbles
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.3 + 0.2, // More transparent
        animationDuration: Math.random() * 8 + 6, // Slower animation
        animationDelay: Math.random() * 5, // Random start times
      });
    }

    setBubbles(newBubbles);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            width: bubble.size + "px",
            height: bubble.size + "px",
            left: bubble.x + "%",
            top: bubble.y + "%",
            opacity: bubble.opacity,
            animationDuration: bubble.animationDuration + "s",
            animationDelay: bubble.animationDelay + "s",
          }}
        />
      ))}
    </div>
  );
};
