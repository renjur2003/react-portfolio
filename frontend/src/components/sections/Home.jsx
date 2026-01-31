import { RevealOnScroll } from "../RevealOnScroll";
import profileImg from "../../assets/profile.jpg";
import { useState, useEffect } from "react";
import { 
  SiMongodb, SiReact, SiNodedotjs, SiExpress, 
  SiHtml5, SiCss3, SiJavascript, SiGit, 
  SiFigma, SiTailwindcss 
} from "react-icons/si";

export const Home = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const toRotate = ["Hi, I'm Renju R", "I Build Scalable Web Apps", "I Create Modern Solutions"];
  
  useEffect(() => {
    let ticker = setInterval(() => {
        tick();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [text, isDeleting]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed(prevSpeed => prevSpeed / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(2000); // Wait before deleting
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  };

  const icons = [
    { Icon: SiMongodb, color: "text-green-500" },
    { Icon: SiReact, color: "text-blue-400" },
    { Icon: SiNodedotjs, color: "text-green-600" },
    { Icon: SiExpress, color: "text-gray-200" },
    { Icon: SiHtml5, color: "text-orange-500" },
    { Icon: SiCss3, color: "text-blue-500" },
    { Icon: SiJavascript, color: "text-yellow-400" },
    { Icon: SiGit, color: "text-red-500" },
    { Icon: SiFigma, color: "text-purple-500" },
    { Icon: SiTailwindcss, color: "text-cyan-400" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 relative">
          
          {/* Orbit Container */}
          <div className="relative flex justify-center items-center mb-6">
            
            {/* Spinning Orbit Ring */}
            <div className="absolute w-64 h-64 md:w-80 md:h-80 border border-blue-500/10 rounded-full animate-spin-slow">
              {icons.map(({ Icon, color }, index) => {
                const angle = (index / icons.length) * 360;
                return (
                  <div
                    key={index}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `rotate(${angle}deg) translate(9rem) rotate(-${angle}deg)`, 
                    }}
                  >
                    <div className="animate-reverse-spin">
                      <Icon className={`text-2xl md:text-3xl ${color} drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]`} />
                    </div>
                  </div>
                );
              })}
            </div>
          
            {/* Profile Image (Floating) */}
            <div className="relative animate-float z-20">
              <img 
                src={profileImg} 
                alt="Renju R" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.2)]"
              />
              <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl -z-10"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 from-yellow-500 via-yellow-200 to-yellow-600 bg-gradient-to-r bg-clip-text text-transparent leading-right">
             {text}<span className="animate-blink"> |</span> 
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I’m a full-stack developer who builds complete web solutions for businesses. From booking platforms to company websites, I create fast, reliable, and professional digital experiences that help you get more clients.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="border border-blue-500/100 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500 hover:text-white"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};