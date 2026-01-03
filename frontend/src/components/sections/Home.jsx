import { RevealOnScroll } from "../RevealOnScroll";
import profileImg from "../../assets/profile.jpg";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <div className="flex justify-center mb-6">
            <img 
              src={profileImg} 
              alt="Renju R" 
              className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.3)] animate-fade-in transition-transform duration-300 hover:scale-105 hover:border-blue-500/50"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 from-yellow-500 via-yellow-200 to-yellow-600 bg-gradient-to-r bg-clip-text text-transparent leading-right">
            Hi, I'm Renju R
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