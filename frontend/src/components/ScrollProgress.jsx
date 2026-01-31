import { useEffect, useState } from "react";

export const ScrollProgress = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;

      setScrollWidth(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 h-1 bg-blue-500 z-50 w-full">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-yellow-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]"
        style={{ width: `${scrollWidth}%`, transition: "width 0.1s ease-out" }}
      ></div>
    </div>
  );
};
