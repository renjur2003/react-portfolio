import { useEffect, useRef } from "react";

export const AnimatedBackground = () => {
  const blobRefs = useRef([]);
  const initialPositions = [
    { x: -4, y: 0 },
    { x: 4, y: 0 },
    { x: -20, y: -20 },
    { x: 20, y: -20 },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      blobRefs.current.forEach((blob, index) => {
        const initialPos = initialPositions[index];
        const x = (e.clientX - window.innerWidth / 2) * initialPos.x * 0.01;
        const y = (e.clientY - window.innerHeight / 2) * initialPos.y * 0.01;
        blob.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full bg-[#0a0a0a] -z-20 overflow-hidden">
      {/* Orb 1: Gold - Top Left - Slow heavy breathe */}
      <div 
        ref={(el) => (blobRefs.current[0] = el)}
        className="absolute top-[-10%] left-[-10%] w-72 h-72 md:w-[500px] md:h-[500px] bg-purple-500/20 rounded-full blur-[80px] md:blur-[120px] opacity-20 animate-blob mix-blend-screen"
      ></div>

      {/* Orb 2: Deep Blue - Bottom Right - Slow float */}
      <div
        ref={(el) => (blobRefs.current[1] = el)}
        className="absolute bottom-[-10%] right-[-10%] w-80 h-80 md:w-[600px] md:h-[600px] bg-blue-600/20 rounded-full blur-[80px] md:blur-[120px] opacity-20 animate-blob animation-delay-2000 mix-blend-screen"
      ></div>

      {/* Orb 3: Gold Accent - Center/Floating */}
      <div
        ref={(el) => (blobRefs.current[2] = el)}
        className="absolute top-[20%] left-[20%] w-64 h-64 md:w-[400px] md:h-[400px] bg-yellow-600/20 rounded-full blur-[60px] md:blur-[100px] opacity-20 animate-blob animation-delay-4000 mix-blend-screen"
      ></div>
    </div>
  );
};
